import{r as o,c,a,b as s,F as r,d as n,e as t,o as d}from"./app.e62aeb11.js";import{_ as l}from"./plugin-vue_export-helper.5a098b48.js";const p={},i=a("h2",{id:"\u524D\u8A00",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u524D\u8A00","aria-hidden":"true"},"#"),n(" \u524D\u8A00")],-1),u=n("Flutter \u5B98\u7F51\u5730\u5740\u4E3A "),h={href:"https://flutter.dev/",target:"_blank",rel:"noopener noreferrer"},g=n("flutter.dev"),_=t(`<p>\u5F00\u53D1\u73AF\u5883\u4E3A <code>manjaro</code>\u3002</p><div class="custom-container danger"><p class="custom-container-title">\u8865\u5145</p><p>\u6709\u610F\u601D\u7684\u662F\uFF0C\u5F53\u6211\u91CD\u65B0\u5B89\u88C5 <code>flutter</code> \u540E\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u6B64\u5904\u4E3A gitlab \u975E gitee</span>
<span class="token function">git</span> clone https://github.com/flutter/flutter.git
</code></pre></div><p>\u4EE5\u4E0B\u5728\u5B89\u88C5\u548C\u4F7F\u7528\u65F6\u9047\u5230\u7684\u95EE\u9898\u5C31\u6D88\u5931\u4E86\uFF0C\u4F46\u5176\u4E2D\u53D1\u751F\u4E86\u4EC0\u4E48\u4E5F\u4E0D\u53EF\u8003\u7A76\u4E86\u3002</p><p>\u6240\u4EE5\u4E0D\u59A8\u5148\u6309\u4EE5\u4E0B\u8FDB\u884C\u64CD\u4F5C\uFF0C\u6700\u540E\u518D\u5207\u6362\u4E3A <code>github</code> \u7684\u4ED3\u5E93\u3002</p></div><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><h3 id="_1-flutter-sdk" tabindex="-1"><a class="header-anchor" href="#_1-flutter-sdk" aria-hidden="true">#</a> 1. Flutter SDK</h3>`,4),k=n("\u5B98\u7F51\u63A8\u8350\u6700\u7B80\u5355\u7684\u65B9\u5F0F\u662F\u4F7F\u7528 "),f=a("code",null,"snap",-1),b=n("\uFF0C\u800C "),m={href:"https://snapcraft.io/docs/installing-snapd",target:"_blank",rel:"noopener noreferrer"},v=n("snapd"),x=n(" \u662F\u652F\u6301 manjaro \u7684\uFF0C\u90A3\u4E48\u76F4\u63A5\u5B89\u88C5\u5B83\uFF1A"),A=t(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># snap \u5B98\u7F51\u8BF4 manjaro \u9884\u88C5\u4E86 snap\uFF0C\u4F46\u53EF\u60DC\u7684\u662F\u6211\u8FD9\u8FB9\u5E76\u6CA1\u6709</span>
<span class="token function">sudo</span> pacman -S snapd
</code></pre></div><p>\u63A5\u7740\u5C31\u53EF\u4EE5\u5B89\u88C5 <code>flutter</code> \u4E86\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> snap <span class="token function">install</span> flutter --classic

<span class="token comment"># error: cannot communicate with server: Post &quot;http://localhost/v2/snaps/flutter&quot;: dial unix /run/snapd.socket: connect: no such file or directory</span>
</code></pre></div>`,3),w=n("\u7CDF\u7CD5\u7684\u662F\uFF0C\u5B89\u88C5\u5931\u8D25\u4E86\uFF0C"),S={href:"https://askubuntu.com/questions/1258137/cannot-communicate-with-server-post-http-localhost-v2-apps-dial-unix-run-sn",target:"_blank",rel:"noopener noreferrer"},y=n("\u627E\u5230\u89E3\u51B3\u65B9\u6CD5"),T=n("\uFF1A"),D=t(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl unmask snapd.service
systemctl start snapd.service
</code></pre></div><p>\u518D\u7EE7\u7EED\u6267\u884C\u4E0A\u4E00\u6B65\u7684\u5B89\u88C5\u547D\u4EE4\uFF0C\u7B49\u5F85\u5B89\u88C5\u5B8C\u6210\u3002</p><p>\u5F53\u7136\uFF0C\u7531\u4E8E\u7F51\u901F\u95EE\u9898\uFF0C\u6211\u9009\u62E9\u4E86\u4F7F\u7528 <code>git</code> \u4E0B\u8F7D\u7684\u65B9\u5F0F\uFF0C\u5E76\u4F7F\u7528\u4E86 <code>gitee</code> \u7684\u4ED3\u5E93\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u4FEE\u6B63 gitee \u4ED3\u5E93\u540D\u4E3A flutter</span>
<span class="token function">git</span> clone https://gitee.com/mirrors/Flutter.git flutter -b stable --depth <span class="token number">1</span>
</code></pre></div><h3 id="_2-\u6DFB\u52A0\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_2-\u6DFB\u52A0\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> 2. \u6DFB\u52A0\u73AF\u5883\u53D8\u91CF</h3><p>\u518D\u5C06\u5176\u8DEF\u5F84\u5199\u5230 <code>.bashrc</code> \u6216 <code>.zshrc</code> \u7B49 <code>rc</code> \u6587\u4EF6\u5199\u5165\uFF0C\u8FD8\u8981\u8BB0\u5F97\u5C06\u955C\u50CF\u6539\u4E3A <code>cn</code>\uFF0C\u5426\u5219\u4F60\u53EF\u80FD\u4F1A\u5361\u5728 <code>Building flutter tool...</code>\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u589E\u52A0 flutter</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">PUB_HOSTED_URL</span><span class="token operator">=</span>https://pub.flutter-io.cn
<span class="token builtin class-name">export</span> <span class="token assign-left variable">FLUTTER_STORAGE_BASE_URL</span><span class="token operator">=</span>https://storage.flutter-io.cn
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token string">&quot;<span class="token environment constant">$PATH</span>:[PATH_TO_FLUTTER_GIT_DIRECTORY]/flutter/bin&quot;</span>
</code></pre></div><p>\u63A5\u7740\u5C31\u53EF\u4EE5\u627E\u5230 <code>flutter</code> \u548C <code>dart</code>\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">which</span> flutter dart
</code></pre></div><h3 id="_3-flutter-doctor" tabindex="-1"><a class="header-anchor" href="#_3-flutter-doctor" aria-hidden="true">#</a> 3. flutter doctor</h3><p>\u53EF\u7528 <code>flutter doctor</code> \u6765\u68C0\u6D4B\u7F3A\u4E4F\u7684\u73AF\u5883\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>Doctor summary <span class="token punctuation">(</span>to see all details, run flutter doctor -v<span class="token punctuation">)</span>:
<span class="token punctuation">[</span>\u2713<span class="token punctuation">]</span> Flutter <span class="token punctuation">(</span>Channel unknown, <span class="token number">1.22</span>.0, on Linux, locale zh_CN.UTF-8<span class="token punctuation">)</span>
<span class="token punctuation">[</span>\u2717<span class="token punctuation">]</span> Android toolchain - develop <span class="token keyword">for</span> Android devices
    \u2717 Unable to <span class="token function">locate</span> Android SDK.
      Install Android Studio from:
      https://developer.android.com/studio/index.html
      On first launch it will assist you <span class="token keyword">in</span> installing the Android SDK
      components.
      <span class="token punctuation">(</span>or visit
      https://flutter.dev/docs/get-started/install/linux<span class="token comment">#android-setup for</span>
      detailed instructions<span class="token punctuation">)</span>.
      If the Android SDK has been installed to a custom location, <span class="token builtin class-name">set</span>
      ANDROID_SDK_ROOT to that location.
      You may also want to <span class="token function">add</span> it to your <span class="token environment constant">PATH</span> environment variable.

<span class="token punctuation">[</span><span class="token operator">!</span><span class="token punctuation">]</span> Android Studio <span class="token punctuation">(</span>not installed<span class="token punctuation">)</span>
<span class="token punctuation">[</span><span class="token operator">!</span><span class="token punctuation">]</span> Connected device
    <span class="token operator">!</span> No devices available

<span class="token operator">!</span> Doctor found issues <span class="token keyword">in</span> <span class="token number">3</span> categories.
</code></pre></div><h3 id="_4-android-studio" tabindex="-1"><a class="header-anchor" href="#_4-android-studio" aria-hidden="true">#</a> 4. Android Studio</h3><p>\u6839\u636E\u63D0\u793A\u7F3A\u4E4F\u4E86 <code>android studio</code>\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> pacman -S android-studio
</code></pre></div><p>\u5B89\u88C5\u5B8C\u6210\u540E\u542F\u52A8 <code>Android Studio</code>\uFF0C\u6839\u636E\u63D0\u793A\u4E00\u6B65\u6B65\u64CD\u4F5C\u5373\u53EF\u3002</p><p>\u53EF\u4EE5\u518D\u4F7F\u7528 <code>flutter doctor</code> \u68C0\u6D4B\u4E00\u4E0B\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>Doctor summary <span class="token punctuation">(</span>to see all details, run flutter doctor -v<span class="token punctuation">)</span>:
<span class="token punctuation">[</span>\u2713<span class="token punctuation">]</span> Flutter <span class="token punctuation">(</span>Channel unknown, <span class="token number">1.22</span>.0, on Linux, locale zh_CN.UTF-8<span class="token punctuation">)</span>
 
<span class="token punctuation">[</span><span class="token operator">!</span><span class="token punctuation">]</span> Android toolchain - develop <span class="token keyword">for</span> Android devices <span class="token punctuation">(</span>Android SDK version
    <span class="token number">30.0</span>.2<span class="token punctuation">)</span>
    \u2717 Android licenses not accepted.  To resolve this, run: flutter doctor
      --android-licenses
<span class="token punctuation">[</span><span class="token operator">!</span><span class="token punctuation">]</span> Android Studio
    \u2717 Flutter plugin not installed<span class="token punctuation">;</span> this adds Flutter specific functionality.
    \u2717 Dart plugin not installed<span class="token punctuation">;</span> this adds Dart specific functionality.
<span class="token punctuation">[</span><span class="token operator">!</span><span class="token punctuation">]</span> Connected device
    <span class="token operator">!</span> No devices available
</code></pre></div><h3 id="_5-plugins" tabindex="-1"><a class="header-anchor" href="#_5-plugins" aria-hidden="true">#</a> 5. plugins</h3><p>\u542F\u52A8 <code>Android Studio</code> \u540E\u5728\u5176\u53F3\u4E0B\u89D2\u6709 <code>Configure</code>\uFF0C\u9009\u62E9 <code>plugins</code>\u3002</p><p>\u8FDB\u5165\u754C\u9762\u540E\u641C\u7D22 <code>flutter</code>\uFF0C\u70B9\u51FB <code>installed</code> \u540E\u6839\u636E\u63D0\u793A\u4E00\u6B65\u6B65\u786E\u8BA4\u5373\u53EF\u3002</p>`,21),F=n("\u7CDF\u7CD5\u7684\u662F\uFF0C\u5728 "),C=a("code",null,"flutter doctor",-1),q=n(" \u68C0\u6D4B\u4E0B\u4F9D\u7136\u4F1A\u63D0\u793A\u672A\u5B89\u88C5\uFF0C\u4F46\u4F7F\u7528\u662F\u53EF\u4EE5\u4F7F\u7528\u7684\uFF0C"),j={href:"https://stackoverflow.com/questions/57085479/android-studio-flutter-plugin-not-installed-this-adds-flutter-specific-functi",target:"_blank",rel:"noopener noreferrer"},O=n("ubuntu 20.04 \u4E5F\u5B58\u5728\u8BE5\u95EE\u9898"),R=n("\u3002"),U=t(`<h3 id="_6-toolchain" tabindex="-1"><a class="header-anchor" href="#_6-toolchain" aria-hidden="true">#</a> 6. toolchain</h3><p>\u53EF\u4EE5\u76F4\u63A5\u5FFD\u7565\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>flutter doctor --android-licenses
</code></pre></div><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><h3 id="_1-\u5361\u5728-creating-flutter-project" tabindex="-1"><a class="header-anchor" href="#_1-\u5361\u5728-creating-flutter-project" aria-hidden="true">#</a> 1. \u5361\u5728 Creating Flutter Project</h3>`,5),N=n("\u521B\u5EFA\u9879\u76EE\u65F6\u5361\u5728 "),L=a("code",null,"Creating Flutter Project",-1),P=n("\uFF0C\u4F46\u524D\u5F80\u5BF9\u5E94\u76EE\u5F55\u65F6\u53D1\u73B0\u9879\u76EE\u5DF2\u7ECF\u521B\u5EFA\u5B8C\u6210\uFF0C"),E={href:"https://blog.csdn.net/wojiaoqiaoxiaoqiao/article/details/105806943",target:"_blank",rel:"noopener noreferrer"},z=n("\u89E3\u51B3\u65B9\u6848"),B=n("\u3002"),K=t(`<h3 id="_2-\u5361\u5728-flutter-doctor" tabindex="-1"><a class="header-anchor" href="#_2-\u5361\u5728-flutter-doctor" aria-hidden="true">#</a> 2. \u5361\u5728 flutter doctor</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>Checking Android licenses is taking an unexpectedly long time<span class="token punctuation">..</span>.
</code></pre></div><p>\u8FD9\u4E2A\u95EE\u9898\u6709\u70B9\u5947\u602A\uFF0C\u4F46\u662F\u76F4\u63A5\u5173\u95ED <code>Android Studio</code> \u540E\u5C31\u6CA1\u6709\u95EE\u9898\u4E86\u3002</p><h3 id="_3-\u5361\u5728-running-gradle-task-assembledebug" tabindex="-1"><a class="header-anchor" href="#_3-\u5361\u5728-running-gradle-task-assembledebug" aria-hidden="true">#</a> 3. \u5361\u5728 Running Gradle task &#39;assembleDebug</h3>`,4),H=n("\u53C2\u8003\u8FD9\u4E2A"),I={href:"https://stackoverflow.com/questions/59516408/flutter-app-stuck-at-running-gradle-task-assembledebug",target:"_blank",rel:"noopener noreferrer"},V=n("\u89E3\u51B3\u65B9\u6848"),G=n("\uFF1A"),Y=t(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u83B7\u53D6\u8BE6\u7EC6\u7684\u4FE1\u606F</span>
flutter run -v
</code></pre></div><blockquote><p>\u63A5\u4E0B\u6765\u7684\u64CD\u4F5C\u4E0E\u5176\u4ED6\u56DE\u7B54\u5747\u4E0D\u4E00\u81F4\uFF0C\u7B97\u662F\u65B0\u624B\u4E00\u987F\u4E71\u64CD\u4F5C\u7ADF\u7136\u80FD\u8FD0\u884C\u4E86\u3002</p></blockquote><p>\u53D1\u73B0\u65F6\u5728\u4E0B\u8F7D <code>gradle-5.6.2-all.zip</code> \u5F15\u53D1\u4E86\u95EE\u9898\uFF0C\u624B\u52A8\u5C06\u8BE5\u6587\u4EF6\u4E0B\u8F7D\u4E0B\u6765\u653E\u5165 <code>/home/your_name/.gradle/wrapper/dists</code> \u4E2D\u3002</p><p>\u7136\u540E\u4FEE\u6539\u9879\u76EE\u7684 <code>android/gradle/wrapper/gradle-wrapper.properties</code> \u6587\u4EF6\u4E2D <code>distributionUrl</code> \u6307\u5411 <code>file\\:///home/your_name/.gradle/wrapper/dists/gradle-5.6.2-all.zip</code>\uFF0C\u7136\u540E\u5C06\u4E0B\u8F7D\u7684\u6587\u4EF6\u653E\u5165\u8BE5\u4F4D\u7F6E\u5373\u53EF\u3002</p><p>\u5982\u679C\u5E0C\u671B\u4EE5\u540E\u65B0\u5EFA\u7684\u9879\u76EE\u90FD\u6307\u5411\u8BE5\u5730\u5740\u5462\uFF1F</p><p>\u56DE\u5230\u4E4B\u524D <code>git clone flutter</code> \u7684\u4F4D\u7F6E\uFF0C\u627E\u5230 <code>packages/flutter_tools/templates/app/android.tmpl/gradle/wrapper/gradle-wrapper.properties</code> \u6587\u4EF6\uFF0C\u5C06 <code>distributionUrl</code> \u6307\u5411 <code>file\\:///home/your_name/.gradle/wrapper/dists/gradle-5.6.2-all.zip</code> \u5373\u53EF\u3002</p><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><h3 id="_1-\u7981\u7528-ios" tabindex="-1"><a class="header-anchor" href="#_1-\u7981\u7528-ios" aria-hidden="true">#</a> 1. \u7981\u7528 ios</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u4F7F\u7528\u8BF4\u660E\u53CA\u5F53\u524D\u914D\u7F6E</span>
flutter config -h

flutter config --no-enable-ios
<span class="token comment"># Settings:</span>
<span class="token comment">#   enable-ios: false</span>
</code></pre></div>`,9);function $(J,M){const e=o("OutboundLink");return d(),c(r,null,[i,a("p",null,[u,a("a",h,[g,s(e)])]),_,a("p",null,[k,f,b,a("a",m,[v,s(e)]),x]),A,a("p",null,[w,a("a",S,[y,s(e)]),T]),D,a("p",null,[F,C,q,a("a",j,[O,s(e)]),R]),U,a("p",null,[N,L,P,a("a",E,[z,s(e)]),B]),K,a("p",null,[H,a("a",I,[V,s(e)]),G]),Y],64)}var X=l(p,[["render",$]]);export{X as default};
