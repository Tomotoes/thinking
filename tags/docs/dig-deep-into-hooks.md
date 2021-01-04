# Dig deep into Hooks

### 推荐阅读

1. [https://hooks-guide.netlify.app/](https://hooks-guide.netlify.app/)
2. [https://github.com/streamich/react-use](https://github.com/streamich/react-use)
3. [https://github.com/alibaba/hooks](https://github.com/alibaba/hooks)

### 参考链接

1. [https://github.com/ecomfe/react-hooks/](https://github.com/ecomfe/react-hooks/)
2. [https://github.com/sandiiarov/use-events](https://github.com/sandiiarov/use-events)
3. [https://github.com/craig1123/react-recipes](https://github.com/craig1123/react-recipes)
4. [https://github.com/kitze/react-hanger](https://github.com/kitze/react-hanger)
5. [https://github.com/stevenpersia/captain-hook](https://github.com/stevenpersia/captain-hook)
6. [30 seconds of code](https://www.30secondsofcode.org/react/t/hooks/a/1)
7. [https://usehooks.com/](https://usehooks.com/)
8. [https://github.com/streamich/react-use](https://github.com/streamich/react-use)
9. [https://github.com/alibaba/hooks](https://github.com/alibaba/hooks)
10. [https://hooks-guide.netlify.app/](https://hooks-guide.netlify.app/)

### Hooks Recipes

#### useEventListener

```text
import { useState, useRef, useEffect, useCallback } from 'react';
​
// Usage
function App(){
  // State for storing mouse coordinates
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  
  // Event handler utilizing useCallback ...
  // ... so that reference never changes.
  const handler = useCallback(
    ({ clientX, clientY }) => {
      // Update coordinates
      setCoords({ x: clientX, y: clientY });
    },
    [setCoords]
  );
  
  // Add event listener using our hook
  useEventListener('mousemove', handler);
  
  return (
    <h1>
      The mouse position is ({coords.x}, {coords.y})
    </h1>
  );
}
​
// Hook
function useEventListener(eventName, handler, element = window){
  // Create a ref that stores handler
  const savedHandler = useRef();
  
  // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us needing to pass it in effect deps array ...
  // ... and potentially cause effect to re-run every render.
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);
​
  useEffect(
    () => {
      // Make sure element supports addEventListener
      // On 
      const isSupported = element && element.addEventListener;
      if (!isSupported) return;
      
      // Create event listener that calls handler function stored in ref
      const eventListener = event => savedHandler.current(event);
      
      // Add event listener
      element.addEventListener(eventName, eventListener);
      
      // Remove event listener on cleanup
      return () => {
        element.removeEventListener(eventName, eventListener);
      };
    },
    [eventName, element] // Re-run if eventName or element changes
  );
};
```

#### useWhyDidYouUpdate

```text
import { useState, useEffect, useRef } from 'react';
​
// Let's pretend this <Counter> component is expensive to re-render so ...
// ... we wrap with React.memo, but we're still seeing performance issues :/
// So we add useWhyDidYouUpdate and check our console to see what's going on.
const Counter = React.memo(props => {
  useWhyDidYouUpdate('Counter', props);
  return <div style={props.style}>{props.count}</div>;
});
​
function App() {
  const [count, setCount] = useState(0);
  const [userId, setUserId] = useState(0);
​
  // Our console output tells use that the style prop for <Counter> ...
  // ... changes on every render, even when we only change userId state by ...
  // ... clicking the "switch user" button. Oh of course! That's because the
  // ... counterStyle object is being re-created on every render.
  // Thanks to our hook we figured this out and realized we should probably ...
  // ... move this object outside of the component body.
  const counterStyle = {
    fontSize: '3rem',
    color: 'red'
  };
​
  return (
    <div>
      <div className="counter">
        <Counter count={count} style={counterStyle} />
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      <div className="user">
        <img src={`http://i.pravatar.cc/80?img=${userId}`} />
        <button onClick={() => setUserId(userId + 1)}>Switch User</button>
      </div>
    </div>
  );
}
​
// Hook
function useWhyDidYouUpdate(name, props) {
  // Get a mutable ref object where we can store props ...
  // ... for comparison next time this hook runs.
  const previousProps = useRef();
​
  useEffect(() => {
    if (previousProps.current) {
      // Get all keys from previous and current props
      const allKeys = Object.keys({ ...previousProps.current, ...props });
      // Use this object to keep track of changed props
      const changesObj = {};
      // Iterate through keys
      allKeys.forEach(key => {
        // If previous is different from current
        if (previousProps.current[key] !== props[key]) {
          // Add to changesObj
          changesObj[key] = {
            from: previousProps.current[key],
            to: props[key]
          };
        }
      });
​
      // If changesObj not empty then output to console
      if (Object.keys(changesObj).length) {
        console.log('[why-did-you-update]', name, changesObj);
      }
    }
​
    // Finally update previousProps with current props for next hook call
    previousProps.current = props;
  });
}
```

#### useKeyPress

```text
import { useState, useEffect } from 'react';
​
// Usage
function App() {
  // Call our hook for each key that we'd like to monitor
  const happyPress = useKeyPress('h');
  const sadPress = useKeyPress('s');
  const robotPress = useKeyPress('r');
  const foxPress = useKeyPress('f');
​
  return (
    <div>
      <div>h, s, r, f</div>
      <div>
        {happyPress && '😊'}
        {sadPress && '😢'}
        {robotPress && '🤖'}
        {foxPress && '🦊'}
      </div>
    </div>
  );
}
​
// Hook
function useKeyPress(targetKey) {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false);
​
  // If pressed key is our target key then set to true
  function downHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }
​
  // If released key is our target key then set to false
  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };
​
  // Add event listeners
  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
​
  return keyPressed;
}
```

#### useOnScreen

```text
import { useState, useEffect, useRef } from 'react';
​
// Usage
function App() {
  // Ref for the element that we want to detect whether on screen
  const ref = useRef();
  // Call the hook passing in ref and root margin
  // In this case it would only be considered onScreen if more ...
  // ... than 300px of element is visible.
  const onScreen = useOnScreen(ref, '-300px');
​
  return (
    <div>
      <div style={{ height: '100vh' }}>
        <h1>Scroll down to next section 👇</h1>
      </div>
      <div
        ref={ref}
        style={{
          height: '100vh',
          backgroundColor: onScreen ? '#23cebd' : '#efefef'
        }}
      >
        {onScreen ? (
          <div>
            <h1>Hey I'm on the screen</h1>
            <img src="https://i.giphy.com/media/ASd0Ukj0y3qMM/giphy.gif" />
          </div>
        ) : (
          <h1>Scroll down 300px from the top of this section 👇</h1>
        )}
      </div>
    </div>
  );
}
​
// Hook
function useOnScreen(ref, rootMargin = '0px') {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);
​
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
​
  return isIntersecting;
}
```

#### usePrevious

```text
import { useState, useEffect, useRef } from 'react';
​
// Usage
function App() {
  // State value and setter for our example
  const [count, setCount] = useState(0);
  
  // Get the previous value (was passed into hook on last render)
  const prevCount = usePrevious(count);
  
  // Display both current and previous count value
  return (
    <div>
      <h1>Now: {count}, before: {prevCount}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
   );
}
​
// Hook
function usePrevious(value) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef();
  
  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes
  
  // Return previous value (happens before update in useEffect above)
  return ref.current;
}
```

#### useWindowSize

```text
import { useState, useEffect } from 'react';
​
// Usage
function App() {
  const size = useWindowSize();
​
  return (
    <div>
      {size.width}px / {size.height}px
    </div>
  );
}
​
// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
​
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    // Add event listener
    window.addEventListener("resize", handleResize);
    
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
​
  return windowSize;
}
```

#### useHover

```text
import { useRef, useState, useEffect } from 'react';
​
// Usage
function App() {
  const [hoverRef, isHovered] = useHover();
​
  return (
    <div ref={hoverRef}>
      {isHovered ? '😁' : '☹️'}
    </div>
  );
}
​
// Hook
function useHover() {
  const [value, setValue] = useState(false);
​
  const ref = useRef(null);
​
  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);
​
  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener('mouseover', handleMouseOver);
        node.addEventListener('mouseout', handleMouseOut);
​
        return () => {
          node.removeEventListener('mouseover', handleMouseOver);
          node.removeEventListener('mouseout', handleMouseOut);
        };
      }
    },
    [ref.current] // Recall only if ref changes
  );
​
  return [ref, value];
}
```

#### useAsync

```text
const useAsync = fn => {
  const initialState = { loading: false, error: null, value: null };
  const stateReducer = (_, action) => {
    switch (action.type) {
      case 'start':
        return { loading: true, error: null, value: null };
      case 'finish':
        return { loading: false, error: null, value: action.value };
      case 'error':
        return { loading: false, error: action.error, value: null };
    }
  };
​
  const [state, dispatch] = React.useReducer(stateReducer, initialState);
​
  const run = async (args = null) => {
    try {
      dispatch({ type: 'start' });
      const value = await fn(args);
      dispatch({ type: 'finish', value });
    } catch (error) {
      dispatch({ type: 'error', error });
    }
  };
​
  return { ...state, run };
};
​
const RandomImage = props => {
  const imgFetch = useAsync(url =>
    fetch(url).then(response => response.json())
  );
​
  return (
    <div>
      <button
        onClick={() => imgFetch.run('https://dog.ceo/api/breeds/image/random')}
        disabled={imgFetch.isLoading}
      >
        Load image
      </button>
      <br />
      {imgFetch.loading && <div>Loading...</div>}
      {imgFetch.error && <div>Error {imgFetch.error}</div>}
      {imgFetch.value && (
        <img
          src={imgFetch.value.message}
          alt="avatar"
          width={400}
          height="auto"
        />
      )}
    </div>
  );
};
​
ReactDOM.render(<RandomImage />, document.getElementById('root'));
```

#### useComponentDidMount

```text
const useComponentDidMount = onMountHandler => {
  React.useEffect(() => {
    onMountHandler();
  }, []);
};

const Mounter = () => {
  useComponentDidMount(() => console.log('Component did mount'));

  return <div>Check the console!</div>;
};

ReactDOM.render(<Mounter />, document.getElementById('root'));
```

#### useComponentWillUnmount

```text
const useComponentWillUnmount = onUnmountHandler => {
  React.useEffect(
    () => () => {
      onUnmountHandler();
    },
    []
  );
};

const Unmounter = () => {
  useComponentWillUnmount(() => console.log('Component will unmount'));

  return <div>Check the console!</div>;
};

ReactDOM.render(<Unmounter />, document.getElementById('root'));
```

#### useInterval

```text
const useInterval = (callback, delay) => {
  const savedCallback = React.useRef();

  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

const Timer = props => {
  const [seconds, setSeconds] = React.useState(0);
  useInterval(() => {
    setSeconds(seconds + 1);
  }, 1000);

  return <p>{seconds}</p>;
};

ReactDOM.render(<Timer />, document.getElementById('root'));
```

#### useTimeout

```text
const useTimeout = (callback, delay) => {
  const savedCallback = React.useRef();

  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setTimeout(tick, delay);
      return () => clearTimeout(id);
    }
  }, [delay]);
};

const OneSecondTimer = props => {
  const [seconds, setSeconds] = React.useState(0);
  useTimeout(() => {
    setSeconds(seconds + 1);
  }, 1000);

  return <p>{seconds}</p>;
};

ReactDOM.render(<OneSecondTimer />, document.getElementById('root'));
```

#### useToggler

```text
const useToggler = initialState => {
  const [value, setValue] = React.useState(initialState);

  const toggleValue = React.useCallback(() => setValue(prev => !prev), []);

  return [value, toggleValue];
};

const Switch = () => {
  const [val, toggleVal] = useToggler(false);
  return <button onClick={toggleVal}>{val ? 'ON' : 'OFF'}</button>;
};
ReactDOM.render(<Switch />, document.getElementById('root'));
```

#### useFetch

```text
const useFetch = (url, options) => {
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setResponse(json);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  return { response, error };
};

const ImageFetch = props => {
  const res = useFetch('https://dog.ceo/api/breeds/image/random', {});
  if (!res.response) {
    return <div>Loading...</div>;
  }
  const imageUrl = res.response.message;
  return (
    <div>
      <img src={imageUrl} alt="avatar" width={400} height="auto" />
    </div>
  );
};

ReactDOM.render(<ImageFetch />, document.getElementById('root'));
```

#### useNavigatorOnLine

```text
const getOnLineStatus = () =>
  typeof navigator !== 'undefined' && typeof navigator.onLine === 'boolean'
    ? navigator.onLine
    : true;

const useNavigatorOnLine = () => {
  const [status, setStatus] = React.useState(getOnLineStatus());

  const setOnline = () => setStatus(true);
  const setOffline = () => setStatus(false);

  React.useEffect(() => {
    window.addEventListener('online', setOnline);
    window.addEventListener('offline', setOffline);

    return () => {
      window.removeEventListener('online', setOnline);
      window.removeEventListener('offline', setOffline);
    };
  }, []);

  return status;
};

const StatusIndicator = () => {
  const isOnline = useNavigatorOnLine();

  return <span>You are {isOnline ? 'online' : 'offline'}.</span>;
};

ReactDOM.render(<StatusIndicator />, document.getElementById('root'));
```

#### useMediaQuery

```text
const useMediaQuery = (query, whenTrue, whenFalse) => {
  if (typeof window === 'undefined' || typeof window.matchMedia === 'undefined')
    return whenFalse;

  const mediaQuery = window.matchMedia(query);
  const [match, setMatch] = React.useState(!!mediaQuery.matches);

  React.useEffect(() => {
    const handler = () => setMatch(!!mediaQuery.matches);
    mediaQuery.addListener(handler);
    return () => mediaQuery.removeListener(handler);
  }, []);

  return match ? whenTrue : whenFalse;
};

const ResponsiveText = () => {
  const text = useMediaQuery(
    '(max-width: 400px)',
    'Less than 400px wide',
    'More than 400px wide'
  );

  return <span>{text}</span>;
};

ReactDOM.render(<ResponsiveText />, document.getElementById('root'));
```

#### useTouch

```text
import React from 'react';

function useTouch(): [
  boolean,
  {
    onTouchStart: (e: React.TouchEvent) => void;
    onTouchEnd: (e: React.TouchEvent) => void;
  }
] {
  const [isTouched, setTouched] = React.useState(false);

  const bind = React.useMemo(
    () => ({
      onTouchStart: (e: React.TouchEvent) => void setTouched(true),
      onTouchEnd: (e: React.TouchEvent) => void setTouched(false),
    }),
    []
  );

  return [isTouched, bind];
}

export default useTouch;
```

#### useCookie

```text
import { useState } from 'react';

const setCookie = (name, value, days, path) => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=${path}`;
};

const getCookie = (name) => document.cookie.split('; ').reduce((r, v) => {
  const parts = v.split('=');
  return parts[0] === name ? decodeURIComponent(parts[1]) : r;
}, '');

const useCookie = (cookieName, initialValue) => {
  const [cookieValue, setCookieValue] = useState(() => getCookie(cookieName) || initialValue);

  const updateCookie = (value, days = 365, path = '/') => {
    setCookieValue(value);
    setCookie(cookieName, value, days, path);
  };

  const deleteCookie = (path = '/') => {
    updateCookie('', -1, path);
    setCookieValue(null);
  };

  return [cookieValue, updateCookie, deleteCookie];
};

export default useCookie;

// Usage

// const App = () => {
//   const [userToken, setUserToken, deleteUserToken] = useCookie('token', '0');

//   render(
//     <div>
//       <p>{userToken}</p>
//       <button onClick={() => setUserToken('123')}>Change token</button>
//       <button onClick={() => deleteUserToken()}>Delete token</button>
//     </div>
//   );
// };
```

#### useLogger

```text
import { useEffect } from 'react';

export function useLogger(name: string, props: any): void {
  useEffect(() => {
    console.log(`${name} has mounted`);
    return () => console.log(`${name} has unmounted`);
  }, [name]);
  useEffect(() => {
    console.log(`${name} Props updated`, props);
  });
}

export default useLogger;
```

#### useTitle

```text
import { useEffect } from "react";

const useTitle = title => {
	useEffect(() => {
		document.title = title;
	}, [title]);
};

export default useTitle;
```

#### useLifecycles

```text
import { useEffect } from 'react';

const useLifecycles = (mount, unmount?) => {
  useEffect(() => {
    if (mount) {
      mount();
    }
    return () => {
      if (unmount) {
        unmount();
      }
    };
  }, []);
};

export default useLifecycles;
```

#### useRendersCount

```text
import { useRef } from 'react';

export function useRendersCount(): number {
  return ++useRef(0).current;
}
```

#### useUpdate

```text
// 强制组件重新渲染的 hook。
import { useCallback, useState } from 'react';

const useUpdate = () => {
  const [, setState] = useState({});

  return useCallback(() => setState({}), []);
};

export default useUpdate;
```

