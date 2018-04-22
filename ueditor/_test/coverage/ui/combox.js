/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    _$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (typeof _$jscoverage !== 'object') {
  _$jscoverage = {};
}
if (! _$jscoverage['ui/combox.js']) {
  _$jscoverage['ui/combox.js'] = [];
  _$jscoverage['ui/combox.js'][5] = 0;
  _$jscoverage['ui/combox.js'][7] = 0;
  _$jscoverage['ui/combox.js'][12] = 0;
  _$jscoverage['ui/combox.js'][13] = 0;
  _$jscoverage['ui/combox.js'][15] = 0;
  _$jscoverage['ui/combox.js'][18] = 0;
  _$jscoverage['ui/combox.js'][19] = 0;
  _$jscoverage['ui/combox.js'][20] = 0;
  _$jscoverage['ui/combox.js'][21] = 0;
  _$jscoverage['ui/combox.js'][22] = 0;
  _$jscoverage['ui/combox.js'][23] = 0;
  _$jscoverage['ui/combox.js'][24] = 0;
  _$jscoverage['ui/combox.js'][25] = 0;
  _$jscoverage['ui/combox.js'][28] = 0;
  _$jscoverage['ui/combox.js'][36] = 0;
  _$jscoverage['ui/combox.js'][40] = 0;
  _$jscoverage['ui/combox.js'][41] = 0;
  _$jscoverage['ui/combox.js'][42] = 0;
  _$jscoverage['ui/combox.js'][45] = 0;
  _$jscoverage['ui/combox.js'][46] = 0;
  _$jscoverage['ui/combox.js'][47] = 0;
  _$jscoverage['ui/combox.js'][48] = 0;
  _$jscoverage['ui/combox.js'][49] = 0;
  _$jscoverage['ui/combox.js'][52] = 0;
  _$jscoverage['ui/combox.js'][55] = 0;
  _$jscoverage['ui/combox.js'][56] = 0;
  _$jscoverage['ui/combox.js'][57] = 0;
  _$jscoverage['ui/combox.js'][58] = 0;
  _$jscoverage['ui/combox.js'][59] = 0;
  _$jscoverage['ui/combox.js'][61] = 0;
  _$jscoverage['ui/combox.js'][62] = 0;
  _$jscoverage['ui/combox.js'][63] = 0;
  _$jscoverage['ui/combox.js'][67] = 0;
  _$jscoverage['ui/combox.js'][68] = 0;
  _$jscoverage['ui/combox.js'][71] = 0;
  _$jscoverage['ui/combox.js'][74] = 0;
  _$jscoverage['ui/combox.js'][75] = 0;
  _$jscoverage['ui/combox.js'][76] = 0;
  _$jscoverage['ui/combox.js'][79] = 0;
  _$jscoverage['ui/combox.js'][82] = 0;
  _$jscoverage['ui/combox.js'][85] = 0;
  _$jscoverage['ui/combox.js'][86] = 0;
  _$jscoverage['ui/combox.js'][87] = 0;
  _$jscoverage['ui/combox.js'][88] = 0;
  _$jscoverage['ui/combox.js'][92] = 0;
}
_$jscoverage['ui/combox.js'].source = ["<span class=\"c\">///import core</span>","<span class=\"c\">///import uicore</span>","<span class=\"c\">///import ui/menu.js</span>","<span class=\"c\">///import ui/splitbutton.js</span>","<span class=\"k\">(</span><span class=\"k\">function</span> <span class=\"k\">()</span><span class=\"k\">{</span>","    <span class=\"c\">// todo: menu&#21644;item&#25552;&#25104;&#36890;&#29992;list</span>","    <span class=\"k\">var</span> utils <span class=\"k\">=</span> baidu<span class=\"k\">.</span>editor<span class=\"k\">.</span>utils<span class=\"k\">,</span>","        uiUtils <span class=\"k\">=</span> baidu<span class=\"k\">.</span>editor<span class=\"k\">.</span>ui<span class=\"k\">.</span>uiUtils<span class=\"k\">,</span>","        Menu <span class=\"k\">=</span> baidu<span class=\"k\">.</span>editor<span class=\"k\">.</span>ui<span class=\"k\">.</span>Menu<span class=\"k\">,</span>","        SplitButton <span class=\"k\">=</span> baidu<span class=\"k\">.</span>editor<span class=\"k\">.</span>ui<span class=\"k\">.</span>SplitButton<span class=\"k\">,</span>","        Combox <span class=\"k\">=</span> baidu<span class=\"k\">.</span>editor<span class=\"k\">.</span>ui<span class=\"k\">.</span>Combox <span class=\"k\">=</span> <span class=\"k\">function</span> <span class=\"k\">(</span>options<span class=\"k\">)</span><span class=\"k\">{</span>","            <span class=\"k\">this</span><span class=\"k\">.</span>initOptions<span class=\"k\">(</span>options<span class=\"k\">);</span>","            <span class=\"k\">this</span><span class=\"k\">.</span>initCombox<span class=\"k\">();</span>","        <span class=\"k\">}</span><span class=\"k\">;</span>","    Combox<span class=\"k\">.</span>prototype <span class=\"k\">=</span> <span class=\"k\">{</span>","        uiName<span class=\"k\">:</span> <span class=\"s\">'combox'</span><span class=\"k\">,</span>","        initCombox<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">()</span><span class=\"k\">{</span>","            <span class=\"k\">var</span> me <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">;</span>","            <span class=\"k\">this</span><span class=\"k\">.</span>items <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">.</span>items <span class=\"k\">||</span> <span class=\"k\">[];</span>","            <span class=\"k\">for</span> <span class=\"k\">(</span><span class=\"k\">var</span> i<span class=\"k\">=</span><span class=\"s\">0</span><span class=\"k\">;</span> i<span class=\"k\">&lt;</span><span class=\"k\">this</span><span class=\"k\">.</span>items<span class=\"k\">.</span>length<span class=\"k\">;</span> i<span class=\"k\">++)</span> <span class=\"k\">{</span>","                <span class=\"k\">var</span> item <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">.</span>items<span class=\"k\">[</span>i<span class=\"k\">];</span>","                item<span class=\"k\">.</span>uiName <span class=\"k\">=</span> <span class=\"s\">'listitem'</span><span class=\"k\">;</span>","                item<span class=\"k\">.</span>index <span class=\"k\">=</span> i<span class=\"k\">;</span>","                item<span class=\"k\">.</span>onclick <span class=\"k\">=</span> <span class=\"k\">function</span> <span class=\"k\">()</span><span class=\"k\">{</span>","                    me<span class=\"k\">.</span>selectByIndex<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>index<span class=\"k\">);</span>","                <span class=\"k\">}</span><span class=\"k\">;</span>","            <span class=\"k\">}</span>","            <span class=\"k\">this</span><span class=\"k\">.</span>popup <span class=\"k\">=</span> <span class=\"k\">new</span> Menu<span class=\"k\">(</span><span class=\"k\">{</span>","                items<span class=\"k\">:</span> <span class=\"k\">this</span><span class=\"k\">.</span>items<span class=\"k\">,</span>","                uiName<span class=\"k\">:</span> <span class=\"s\">'list'</span><span class=\"k\">,</span>","                editor<span class=\"k\">:</span><span class=\"k\">this</span><span class=\"k\">.</span>editor<span class=\"k\">,</span>","                captureWheel<span class=\"k\">:</span> <span class=\"k\">true</span><span class=\"k\">,</span>","                combox<span class=\"k\">:</span> <span class=\"k\">this</span>","            <span class=\"k\">}</span><span class=\"k\">);</span>","","            <span class=\"k\">this</span><span class=\"k\">.</span>initSplitButton<span class=\"k\">();</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","        _SplitButton_postRender<span class=\"k\">:</span> SplitButton<span class=\"k\">.</span>prototype<span class=\"k\">.</span>postRender<span class=\"k\">,</span>","        postRender<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">()</span><span class=\"k\">{</span>","            <span class=\"k\">this</span><span class=\"k\">.</span>_SplitButton_postRender<span class=\"k\">();</span>","            <span class=\"k\">this</span><span class=\"k\">.</span>setLabel<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>label <span class=\"k\">||</span> <span class=\"s\">''</span><span class=\"k\">);</span>","            <span class=\"k\">this</span><span class=\"k\">.</span>setValue<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>initValue <span class=\"k\">||</span> <span class=\"s\">''</span><span class=\"k\">);</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","        showPopup<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">()</span><span class=\"k\">{</span>","            <span class=\"k\">var</span> rect <span class=\"k\">=</span> uiUtils<span class=\"k\">.</span>getClientRect<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>getDom<span class=\"k\">());</span>","            rect<span class=\"k\">.</span>top <span class=\"k\">+=</span> <span class=\"s\">1</span><span class=\"k\">;</span>","            rect<span class=\"k\">.</span>bottom <span class=\"k\">-=</span> <span class=\"s\">1</span><span class=\"k\">;</span>","            rect<span class=\"k\">.</span>height <span class=\"k\">-=</span> <span class=\"s\">2</span><span class=\"k\">;</span>","            <span class=\"k\">this</span><span class=\"k\">.</span>popup<span class=\"k\">.</span>showAnchorRect<span class=\"k\">(</span>rect<span class=\"k\">);</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","        getValue<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">()</span><span class=\"k\">{</span>","            <span class=\"k\">return</span> <span class=\"k\">this</span><span class=\"k\">.</span>value<span class=\"k\">;</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","        setValue<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">(</span>value<span class=\"k\">)</span><span class=\"k\">{</span>","            <span class=\"k\">var</span> index <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">.</span>indexByValue<span class=\"k\">(</span>value<span class=\"k\">);</span>","            <span class=\"k\">if</span> <span class=\"k\">(</span>index <span class=\"k\">!=</span> <span class=\"k\">-</span><span class=\"s\">1</span><span class=\"k\">)</span> <span class=\"k\">{</span>","                <span class=\"k\">this</span><span class=\"k\">.</span>selectedIndex <span class=\"k\">=</span> index<span class=\"k\">;</span>","                <span class=\"k\">this</span><span class=\"k\">.</span>setLabel<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>items<span class=\"k\">[</span>index<span class=\"k\">].</span>label<span class=\"k\">);</span>","                <span class=\"k\">this</span><span class=\"k\">.</span>value <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">.</span>items<span class=\"k\">[</span>index<span class=\"k\">].</span>value<span class=\"k\">;</span>","            <span class=\"k\">}</span> <span class=\"k\">else</span> <span class=\"k\">{</span>","                <span class=\"k\">this</span><span class=\"k\">.</span>selectedIndex <span class=\"k\">=</span> <span class=\"k\">-</span><span class=\"s\">1</span><span class=\"k\">;</span>","                <span class=\"k\">this</span><span class=\"k\">.</span>setLabel<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>getLabelForUnknowValue<span class=\"k\">(</span>value<span class=\"k\">));</span>","                <span class=\"k\">this</span><span class=\"k\">.</span>value <span class=\"k\">=</span> value<span class=\"k\">;</span>","            <span class=\"k\">}</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","        setLabel<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">(</span>label<span class=\"k\">)</span><span class=\"k\">{</span>","            <span class=\"k\">this</span><span class=\"k\">.</span>getDom<span class=\"k\">(</span><span class=\"s\">'button_body'</span><span class=\"k\">).</span>innerHTML <span class=\"k\">=</span> label<span class=\"k\">;</span>","            <span class=\"k\">this</span><span class=\"k\">.</span>label <span class=\"k\">=</span> label<span class=\"k\">;</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","        getLabelForUnknowValue<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">(</span>value<span class=\"k\">)</span><span class=\"k\">{</span>","            <span class=\"k\">return</span> value<span class=\"k\">;</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","        indexByValue<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">(</span>value<span class=\"k\">)</span><span class=\"k\">{</span>","            <span class=\"k\">for</span> <span class=\"k\">(</span><span class=\"k\">var</span> i<span class=\"k\">=</span><span class=\"s\">0</span><span class=\"k\">;</span> i<span class=\"k\">&lt;</span><span class=\"k\">this</span><span class=\"k\">.</span>items<span class=\"k\">.</span>length<span class=\"k\">;</span> i<span class=\"k\">++)</span> <span class=\"k\">{</span>","                <span class=\"k\">if</span> <span class=\"k\">(</span>value <span class=\"k\">==</span> <span class=\"k\">this</span><span class=\"k\">.</span>items<span class=\"k\">[</span>i<span class=\"k\">].</span>value<span class=\"k\">)</span> <span class=\"k\">{</span>","                    <span class=\"k\">return</span> i<span class=\"k\">;</span>","                <span class=\"k\">}</span>","            <span class=\"k\">}</span>","            <span class=\"k\">return</span> <span class=\"k\">-</span><span class=\"s\">1</span><span class=\"k\">;</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","        getItem<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">(</span>index<span class=\"k\">)</span><span class=\"k\">{</span>","            <span class=\"k\">return</span> <span class=\"k\">this</span><span class=\"k\">.</span>items<span class=\"k\">[</span>index<span class=\"k\">];</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","        selectByIndex<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">(</span>index<span class=\"k\">)</span><span class=\"k\">{</span>","            <span class=\"k\">if</span> <span class=\"k\">(</span>index <span class=\"k\">&lt;</span> <span class=\"k\">this</span><span class=\"k\">.</span>items<span class=\"k\">.</span>length <span class=\"k\">&amp;&amp;</span> <span class=\"k\">this</span><span class=\"k\">.</span>fireEvent<span class=\"k\">(</span><span class=\"s\">'select'</span><span class=\"k\">,</span> index<span class=\"k\">)</span> <span class=\"k\">!==</span> <span class=\"k\">false</span><span class=\"k\">)</span> <span class=\"k\">{</span>","                <span class=\"k\">this</span><span class=\"k\">.</span>selectedIndex <span class=\"k\">=</span> index<span class=\"k\">;</span>","                <span class=\"k\">this</span><span class=\"k\">.</span>value <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">.</span>items<span class=\"k\">[</span>index<span class=\"k\">].</span>value<span class=\"k\">;</span>","                <span class=\"k\">this</span><span class=\"k\">.</span>setLabel<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>items<span class=\"k\">[</span>index<span class=\"k\">].</span>label<span class=\"k\">);</span>","            <span class=\"k\">}</span>","        <span class=\"k\">}</span>","    <span class=\"k\">}</span><span class=\"k\">;</span>","    utils<span class=\"k\">.</span>inherits<span class=\"k\">(</span>Combox<span class=\"k\">,</span> SplitButton<span class=\"k\">);</span>","<span class=\"k\">}</span><span class=\"k\">)();</span>"];
_$jscoverage['ui/combox.js'][5]++;
(function () {
  _$jscoverage['ui/combox.js'][7]++;
  var utils = baidu.editor.utils, uiUtils = baidu.editor.ui.uiUtils, Menu = baidu.editor.ui.Menu, SplitButton = baidu.editor.ui.SplitButton, Combox = (baidu.editor.ui.Combox = (function (options) {
  _$jscoverage['ui/combox.js'][12]++;
  this.initOptions(options);
  _$jscoverage['ui/combox.js'][13]++;
  this.initCombox();
}));
  _$jscoverage['ui/combox.js'][15]++;
  Combox.prototype = {uiName: "combox", initCombox: (function () {
  _$jscoverage['ui/combox.js'][18]++;
  var me = this;
  _$jscoverage['ui/combox.js'][19]++;
  this.items = (this.items || []);
  _$jscoverage['ui/combox.js'][20]++;
  for (var i = 0; (i < this.items.length); (i++)) {
    _$jscoverage['ui/combox.js'][21]++;
    var item = this.items[i];
    _$jscoverage['ui/combox.js'][22]++;
    item.uiName = "listitem";
    _$jscoverage['ui/combox.js'][23]++;
    item.index = i;
    _$jscoverage['ui/combox.js'][24]++;
    item.onclick = (function () {
  _$jscoverage['ui/combox.js'][25]++;
  me.selectByIndex(this.index);
});
}
  _$jscoverage['ui/combox.js'][28]++;
  this.popup = new Menu({items: this.items, uiName: "list", editor: this.editor, captureWheel: true, combox: this});
  _$jscoverage['ui/combox.js'][36]++;
  this.initSplitButton();
}), _SplitButton_postRender: SplitButton.prototype.postRender, postRender: (function () {
  _$jscoverage['ui/combox.js'][40]++;
  this._SplitButton_postRender();
  _$jscoverage['ui/combox.js'][41]++;
  this.setLabel((this.label || ""));
  _$jscoverage['ui/combox.js'][42]++;
  this.setValue((this.initValue || ""));
}), showPopup: (function () {
  _$jscoverage['ui/combox.js'][45]++;
  var rect = uiUtils.getClientRect(this.getDom());
  _$jscoverage['ui/combox.js'][46]++;
  rect.top += 1;
  _$jscoverage['ui/combox.js'][47]++;
  rect.bottom -= 1;
  _$jscoverage['ui/combox.js'][48]++;
  rect.height -= 2;
  _$jscoverage['ui/combox.js'][49]++;
  this.popup.showAnchorRect(rect);
}), getValue: (function () {
  _$jscoverage['ui/combox.js'][52]++;
  return this.value;
}), setValue: (function (value) {
  _$jscoverage['ui/combox.js'][55]++;
  var index = this.indexByValue(value);
  _$jscoverage['ui/combox.js'][56]++;
  if ((index != -1)) {
    _$jscoverage['ui/combox.js'][57]++;
    this.selectedIndex = index;
    _$jscoverage['ui/combox.js'][58]++;
    this.setLabel(this.items[index].label);
    _$jscoverage['ui/combox.js'][59]++;
    this.value = this.items[index].value;
  }
  else {
    _$jscoverage['ui/combox.js'][61]++;
    this.selectedIndex = -1;
    _$jscoverage['ui/combox.js'][62]++;
    this.setLabel(this.getLabelForUnknowValue(value));
    _$jscoverage['ui/combox.js'][63]++;
    this.value = value;
  }
}), setLabel: (function (label) {
  _$jscoverage['ui/combox.js'][67]++;
  this.getDom("button_body").innerHTML = label;
  _$jscoverage['ui/combox.js'][68]++;
  this.label = label;
}), getLabelForUnknowValue: (function (value) {
  _$jscoverage['ui/combox.js'][71]++;
  return value;
}), indexByValue: (function (value) {
  _$jscoverage['ui/combox.js'][74]++;
  for (var i = 0; (i < this.items.length); (i++)) {
    _$jscoverage['ui/combox.js'][75]++;
    if ((value == this.items[i].value)) {
      _$jscoverage['ui/combox.js'][76]++;
      return i;
    }
}
  _$jscoverage['ui/combox.js'][79]++;
  return -1;
}), getItem: (function (index) {
  _$jscoverage['ui/combox.js'][82]++;
  return this.items[index];
}), selectByIndex: (function (index) {
  _$jscoverage['ui/combox.js'][85]++;
  if (((index < this.items.length) && (this.fireEvent("select", index) !== false))) {
    _$jscoverage['ui/combox.js'][86]++;
    this.selectedIndex = index;
    _$jscoverage['ui/combox.js'][87]++;
    this.value = this.items[index].value;
    _$jscoverage['ui/combox.js'][88]++;
    this.setLabel(this.items[index].label);
  }
})};
  _$jscoverage['ui/combox.js'][92]++;
  utils.inherits(Combox, SplitButton);
})();
