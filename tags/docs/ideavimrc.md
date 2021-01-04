---
description: To be updated
---

# ideavimrc

```text
" ==================================================
" 配置篇
" ==================================================

" 语法高亮
syntax on

" 关闭自动折行
set nowrap

" 横向滚动一次 40 个字符,
set sidescroll=40
" 垂直滚动时，光标距离顶部/底部的位置（单位：行）
set scrolloff=5
" 水平滚动时，光标距离行首或行尾的位置（单位：字符）。该配置在不折行时比较有用
set sidescrolloff=15

" 不创建备份文件
set noback

" 搜索时，高亮显示匹配结果
set hlsearch
" 输入搜索模式时，每输入一个字符，就自动跳到第一个匹配的结果
set incsearch
" 搜索时忽略大小写 
set ignorecase
" 如果同时打开了ignorecase，那么对于只有一个大写字母的搜索词，将大小写敏感
" 其他情况都是大小写不敏感。比如，搜索Test时，将不匹配test；搜索test时，将匹配Test
set smartcase

" 不与 Vi 兼容（采用 Vim 自己的操作命令）
set nocompatible

" 在状态栏显示光标的当前位置（位于哪一行哪一列）
set ruler
" 显示光标所在的当前行的行号，其他行都为相对于该行的相对行号
set relativenumber
" 显示行号
set number
" 光标所在的当前行高亮
set cursorline
" 是否显示状态栏。0 表示不显示，1 表示只在多窗口时显示，2 表示显示
set laststatus=2
" 命令模式下，在底部显示，当前键入的指令
set showcmd 
" 光标遇到圆括号、方括号、大括号时，自动高亮对应的另一个圆括号、方括号和大括号
set showmatch
" 在底部显示，当前处于命令模式还是插入模式
set showmode

" Vim 需要记住多少次历史操作
set history=1000
" 与系统共用剪切板
set clipboard+=unnamed
set clipboard+=ideaput

" 打开文件监视。如果在编辑过程中文件发生外部改变（比如被别的编辑器编辑了），就会发出提示
set autoread

" 支持使用鼠标
set mouse=a

" Tab 转为多少个空格
set softtabstop=2
" 按下回车键后，下一行的缩进会自动跟上一行的缩进保持一致
set autoindent

" 出错时，不要发出响声
set noerrorbells

" 允许退格键在以下场景下正常执行
set backspace=indent,eol,start

" ==================================================
" 插件篇
" ==================================================
" {action}s{surround symbol} {target symbol}
set surround

" {action}ae -> {action}entire-content
set textobj-entire

" auto switch input model
set keep-english-in-normal

" ==================================================
" 映射篇
" ==================================================

" 禁用 esc 键
" inoremap <esc> <nop>

" 禁用方向键
" inoremap <down> <nop>
" nnoremap <down> <nop>
" inoremap <left> <nop>
" nnoremap <left> <nop>
" inoremap <right> <nop>
" nnoremap <right> <nop>

" jj 进入 insert model
inoremap jj <Esc>

" L 移动到行尾
nnoremap L $
vnoremap L $

" H 移动到行首
nnoremap H ^
vnoremap H ^

" 设置 x c d action 的寄存器不与系统进行交互
nnoremap x "_x
xnoremap x "_x
nnoremap c "xc
xnoremap c "xc
nnoremap d "_d
vnoremap d "_d
vnoremap D "_D
nnoremap D "_D

" U 执行重做
nnoremap U :action $Redo<CR>

" 移动时 自动定位到屏幕中心
nnoremap n nzz
nnoremap N Nzz
vnoremap n nzz
vnoremap N Nzz
noremap # #zz
noremap * *zz
noremap w wzz
noremap W Wzz
noremap e ezz
noremap E Ezz
noremap b bzz
noremap B Bzz
noremap H Hzz
noremap L Lzz
noremap 0 0zz
noremap $ $zz
noremap ^ ^zz
noremap j jzz
noremap k kzz
noremap G Gzz
noremap u uzz
noremap ( (zz
noremap ) )zz
noremap { {zz
noremap } }zz
noremap [{ [{zz
noremap ]} ]}zz

" 退格键正常执行
nnoremap <Bs> :action EditorBackSpace<CR>

" 使用 Ctrl + up/down 可以滚动屏幕
nnoremap <c-up> :action EditorScrollUp<CR>
nnoremap <c-down> :action EditorScrollDown<CR>

" ==================================================
" Leader 键篇
" ==================================================

let mapleader=' '

" 多窗口操作
" 清除窗口
nnoremap <Leader>wq <C-W>c
" 光标窗口切换
nnoremap <Leader>ww <C-W>w
nnoremap <Leader>wj <C-W>j
nnoremap <Leader>wk <C-W>k
nnoremap <Leader>wh <C-W>h
nnoremap <Leader>wl <C-W>l
" 纵向新增窗口
nnoremap <Leader>ws <C-W>s
" 横向新增窗口
nnoremap <Leader>we <C-W>v

" 代码块收起
nnoremap <Leader>, zc
" 代码块展开
nnoremap <Leader>. zo

" jk 前进后退
nnoremap <leader>j :action Back<cr>
nnoremap <leader>k :action Forward<cr>
" hl tab 页切换
nnoremap <leader>h :action PreviousTab<cr>
nnoremap <leader>l :action NextTab<cr>

" 最近文件, 最近位置 列表显示
nnoremap <leader>e :action RecentFiles<cr>
nnoremap <leader>E :action RecentLocations<cr>

" 书签操作
nnoremap <leader>q :action ToggleBookmark<CR>
nnoremap <leader>Q :action ShowBookmarks<CR>

" 关闭 tab 管理
nnoremap <leader>d :action CloseContent<cr>
nnoremap <leader>D :action ReopenClosedTab<cr>

" 注释与重命名
nnoremap <leader>r :action CommentByLineComment<cr>
nnoremap <leader>R :action RenameElement<cr>

" 跳转到定位
nnoremap <leader>x :action GotoDeclaration<cr>

" 查看使用案例
nnoremap <leader>u :action FindUsages<cr>

" 展示错误信息
nnoremap <leader>a :action ShowErrorDescription<CR>

" 展示文件内的大纲
nnoremap <leader>o :action FileStructurePopup<CR>

" 使用 ESLint 格式化代码
nnoremap <leader>t :action Javascript.Linters.EsLint.Fix<CR>

" 展示文件路径 可以快速打 Finder 中打开
nnoremap <Leader>f :action ShowFilePath<CR>

" 切换断点
nnoremap <Leader>b :action ToggleLineBreakpoint<CR>

" Ace jump
nnoremap <leader>f :action AceAction <CR>

" 聚焦项目栏
nnoremap <Leader>\ :action SelectInProjectView<CR>

" 切换免打扰模式
nnoremap <Leader>v :action ToggleDistractionFreeMode<CR>

" 显示隐藏 Git Panel
nnoremap <Leader>g :action ActivateVersionControlToolWindow<CR>

" Reload .ideavimrc
nnoremap <Leader>s :source ~/.ideavimrc<CR>
```

