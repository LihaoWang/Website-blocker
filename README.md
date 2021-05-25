# Freedom Website Blocker

Freedom 是一款 Chrome 浏览器插件，它只有一个功能：屏蔽任何不必要的网站，从而让你能专注在更重要的事上。

## 安装
**方式 1 （推荐）**

[从谷歌 Web 商店安装](https://chrome.google.com/webstore/detail/freedom-website-blocker/addknbmjckakcnlnmpddbaofgjllpamd)

**方式 2**

1. 下载[最新 Release](https://github.com/LihaoWang/Website-blocker/releases/tag/1.0.1)
2. 点击 Chrome 浏览器右上角菜单栏，从“更多工具”中打开“扩展程序”，或在网址列输入：chrome://extensions/
3. 在右上角打开“开发者模式”
4. 加载已解压的扩展程序
5. 点击弹出窗口的“添加扩展程序”

## 使用

1. 在插件栏中点开 Freedom 插件。在输入框中输入想要屏蔽的网址，多个网址之间用「逗号」隔开（注意使用英文逗号）。
2. 网址输入完毕后，点击「Add to filter」即可将以上网站加入屏蔽列表
3. 点击「Start Focus」，开启屏蔽模式

## FAQ
* 开启插件后，网站没有被正确屏蔽？

请检查「Filter list」中的网址格式，通常情况下，网址应该类似 * ://.youtube.com/， 即以 * :// 开头，* / 结尾，不包含「http」「www」等字符。若遇到网址没有正确处理的情况，可以尝试点击「Reset」之后手动输入类似「youtube.com」这样的简单网址（而不是直接从浏览器地址栏复制粘贴）

* 遇到其他 bug？

请提交 [issue](https://github.com/LihaoWang/Website-blocker/issues)

## License
[MIT](https://choosealicense.com/licenses/mit/)
