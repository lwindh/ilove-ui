var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useState, useEffect, useRef, } from "react";
import classNames from "classnames";
import Input from "../Input/Input";
import useDebounce from "../../hooks/useDebounce";
import useClickOutside from "../../hooks/useClickOutside";
import Icon from "../Icon";
/**
 * 输入框自动完成功能。当输入值需要自动完成时使用，支持同步和异步两种方式 支持 Input 组件的所有属性 支持键盘事件选择。
 *
 * ~~~js
 * import { AutoComplete  } from 'vikingship'
 * ~~~
 *
 */
export var AutoComplete = function (_a) {
    var fetchSuggestions = _a.fetchSuggestions, onSelect = _a.onSelect, renderOption = _a.renderOption, style = _a.style, value = _a.value, props = __rest(_a, ["fetchSuggestions", "onSelect", "renderOption", "style", "value"]);
    var _b = useState(value), inputValue = _b[0], setInputValue = _b[1];
    var _c = useState([]), suggestions = _c[0], setSuggestions = _c[1];
    var _d = useState(false), loading = _d[0], setLoading = _d[1];
    var _e = useState(false), showDropdown = _e[0], setShowDropdown = _e[1];
    var _f = useState(-1), highlightIndex = _f[0], setHighlightIndex = _f[1];
    var triggerSearch = useRef(false);
    var componentRef = useRef(null);
    var debouncedValue = useDebounce(inputValue, 500);
    //点击区域外关闭下拉菜单
    useClickOutside(componentRef, function () {
        setSuggestions([]);
        setShowDropdown(false);
    });
    useEffect(function () {
        if (debouncedValue && triggerSearch.current === true) {
            setSuggestions([]);
            var res = fetchSuggestions(debouncedValue);
            if (res instanceof Promise) {
                setShowDropdown(true);
                setLoading(true);
                res.then(function (data) {
                    setLoading(false);
                    setShowDropdown(false);
                    setSuggestions(data);
                    if (data.length > 0) {
                        setShowDropdown(true);
                    }
                });
            }
            else {
                setSuggestions(res);
                if (res.length > 0) {
                    setShowDropdown(true);
                }
            }
        }
        else {
            setShowDropdown(false);
        }
        setHighlightIndex(-1);
    }, [debouncedValue, fetchSuggestions]);
    var handlechange = function (e) {
        var value = e.target.value.trim();
        setInputValue(value);
        triggerSearch.current = true;
    };
    var handleSelect = function (item) {
        setInputValue(item.value);
        setSuggestions([]);
        if (onSelect) {
            onSelect(item);
        }
        triggerSearch.current = false;
    };
    var highlight = function (index) {
        if (index < 0)
            index = 0;
        if (index >= suggestions.length) {
            index = suggestions.length - 1;
        }
        setHighlightIndex(index);
    };
    var handleKeyDown = function (e) {
        switch (e.keyCode) {
            case 13:
                if (suggestions[highlightIndex]) {
                    handleSelect(suggestions[highlightIndex]);
                }
                break;
            case 38:
                highlight(highlightIndex - 1);
                break;
            case 40:
                highlight(highlightIndex + 1);
                break;
            case 27:
                setShowDropdown(false);
                break;
            default:
                break;
        }
    };
    var renderTemplate = function (item) {
        return renderOption ? renderOption(item) : item.value;
    };
    var generateDropdown = function () {
        return (React.createElement("ul", { className: "lv-suggestion-list" },
            loading &&
                React.createElement("div", { className: "suggstions-loading-icon" },
                    React.createElement(Icon, { icon: "spinner", spin: true })),
            suggestions.map(function (item, index) {
                var cnames = classNames("suggestion-item", {
                    "is-active": index === highlightIndex,
                });
                return (React.createElement("li", { key: index, className: cnames, onClick: function () { return handleSelect(item); } }, renderTemplate(item)));
            })));
    };
    return (React.createElement("div", { className: "lv-auto-complete", style: style, ref: componentRef },
        React.createElement(Input, __assign({ value: inputValue, onChange: handlechange, onKeyDown: handleKeyDown }, props)),
        showDropdown && generateDropdown()));
};
export default AutoComplete;
