try {
  var Se = 'actions',
    W = 'storybook/actions',
    Ae = `${W}/panel`,
    j = `${W}/action-event`
  var a = __REACT__,
    {
      Children: Ce,
      Component: xe,
      Fragment: we,
      Profiler: $r,
      PureComponent: Wr,
      StrictMode: Yr,
      Suspense: Jr,
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: qr,
      cloneElement: Xr,
      createContext: Y,
      createElement: Zr,
      createFactory: Kr,
      createRef: Qr,
      forwardRef: en,
      isValidElement: tn,
      lazy: rn,
      memo: U,
      useCallback: A,
      useContext: J,
      useDebugValue: nn,
      useEffect: an,
      useImperativeHandle: on,
      useLayoutEffect: Ne,
      useMemo: Le,
      useReducer: sn,
      useRef: ln,
      useState: C,
      version: un,
    } = __REACT__
  var mn = __STORYBOOKAPI__,
    {
      ActiveTabs: bn,
      Consumer: gn,
      ManagerContext: hn,
      Provider: En,
      addons: te,
      combineParameters: yn,
      controlOrMetaKey: On,
      controlOrMetaSymbol: vn,
      eventMatchesShortcut: Tn,
      eventToShortcut: _n,
      isMacLike: Rn,
      isShortcutTaken: Sn,
      keyToSymbol: An,
      merge: Cn,
      mockChannel: xn,
      optionOrAltSymbol: wn,
      shortcutMatchesShortcut: Nn,
      shortcutToHumanString: Ln,
      types: Ie,
      useAddonState: In,
      useArgTypes: Dn,
      useArgs: Mn,
      useChannel: De,
      useGlobalTypes: Pn,
      useGlobals: Bn,
      useParameter: Fn,
      useSharedState: zn,
      useStoryPrepared: Hn,
      useStorybookApi: jn,
      useStorybookState: Un,
    } = __STORYBOOKAPI__
  var Wn = __STORYBOOKCOREEVENTS__,
    {
      CHANNEL_CREATED: Yn,
      CONFIG_ERROR: Jn,
      CURRENT_STORY_WAS_SET: qn,
      DOCS_RENDERED: Xn,
      FORCE_REMOUNT: Zn,
      FORCE_RE_RENDER: Kn,
      GLOBALS_UPDATED: Qn,
      IGNORED_EXCEPTION: ea,
      NAVIGATE_URL: ta,
      PLAY_FUNCTION_THREW_EXCEPTION: ra,
      PRELOAD_ENTRIES: na,
      PREVIEW_BUILDER_PROGRESS: aa,
      PREVIEW_KEYDOWN: oa,
      REGISTER_SUBSCRIPTION: ia,
      RESET_STORY_ARGS: sa,
      SELECT_STORY: la,
      SET_CONFIG: ua,
      SET_CURRENT_STORY: ca,
      SET_GLOBALS: fa,
      SET_INDEX: pa,
      SET_STORIES: da,
      SHARED_STATE_CHANGED: ma,
      SHARED_STATE_SET: ba,
      STORIES_COLLAPSE_ALL: ga,
      STORIES_EXPAND_ALL: ha,
      STORY_ARGS_UPDATED: Ea,
      STORY_CHANGED: I,
      STORY_ERRORED: ya,
      STORY_INDEX_INVALIDATED: Oa,
      STORY_MISSING: va,
      STORY_PREPARED: Ta,
      STORY_RENDERED: _a,
      STORY_RENDER_PHASE_CHANGED: Ra,
      STORY_SPECIFIED: Sa,
      STORY_THREW_EXCEPTION: Aa,
      STORY_UNCHANGED: Ca,
      UPDATE_GLOBALS: xa,
      UPDATE_QUERY_PARAMS: wa,
      UPDATE_STORY_ARGS: Na,
    } = __STORYBOOKCOREEVENTS__
  var Me = Object.prototype.hasOwnProperty
  function Pe(e, t, r) {
    for (r of e.keys()) if (D(r, t)) return r
  }
  function D(e, t) {
    var r, n, o
    if (e === t) return !0
    if (e && t && (r = e.constructor) === t.constructor) {
      if (r === Date) return e.getTime() === t.getTime()
      if (r === RegExp) return e.toString() === t.toString()
      if (r === Array) {
        if ((n = e.length) === t.length) for (; n-- && D(e[n], t[n]); );
        return n === -1
      }
      if (r === Set) {
        if (e.size !== t.size) return !1
        for (n of e)
          if (
            ((o = n),
            (o && typeof o == 'object' && ((o = Pe(t, o)), !o)) || !t.has(o))
          )
            return !1
        return !0
      }
      if (r === Map) {
        if (e.size !== t.size) return !1
        for (n of e)
          if (
            ((o = n[0]),
            (o && typeof o == 'object' && ((o = Pe(t, o)), !o)) ||
              !D(n[1], t.get(o)))
          )
            return !1
        return !0
      }
      if (r === ArrayBuffer) (e = new Uint8Array(e)), (t = new Uint8Array(t))
      else if (r === DataView) {
        if ((n = e.byteLength) === t.byteLength)
          for (; n-- && e.getInt8(n) === t.getInt8(n); );
        return n === -1
      }
      if (ArrayBuffer.isView(e)) {
        if ((n = e.byteLength) === t.byteLength) for (; n-- && e[n] === t[n]; );
        return n === -1
      }
      if (!r || typeof e == 'object') {
        n = 0
        for (r in e)
          if (
            (Me.call(e, r) && ++n && !Me.call(t, r)) ||
            !(r in t) ||
            !D(e[r], t[r])
          )
            return !1
        return Object.keys(t).length === n
      }
    }
    return e !== e && t !== t
  }
  var Ha = __STORYBOOKTHEMING__,
    {
      CacheProvider: ja,
      ClassNames: Ua,
      Global: ka,
      ThemeProvider: Ga,
      background: Va,
      color: $a,
      convert: Wa,
      create: Ya,
      createCache: Ja,
      createGlobal: qa,
      createReset: Xa,
      css: Za,
      darken: Ka,
      ensure: Qa,
      ignoreSsrWarning: eo,
      isPropValid: to,
      jsx: ro,
      keyframes: no,
      lighten: ao,
      styled: M,
      themes: oo,
      typography: io,
      useTheme: so,
      withTheme: Be,
    } = __STORYBOOKTHEMING__
  var it = Object.create,
    ie = Object.defineProperty,
    st = Object.getOwnPropertyDescriptor,
    Ue = Object.getOwnPropertyNames,
    lt = Object.getPrototypeOf,
    ut = Object.prototype.hasOwnProperty,
    se = (e, t) =>
      function () {
        return (
          t || (0, e[Ue(e)[0]])((t = { exports: {} }).exports, t), t.exports
        )
      },
    ct = (e, t) => {
      for (var r in t) ie(e, r, { get: t[r], enumerable: !0 })
    },
    ft = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of Ue(t))
          !ut.call(e, o) &&
            o !== r &&
            ie(e, o, {
              get: () => t[o],
              enumerable: !(n = st(t, o)) || n.enumerable,
            })
      return e
    },
    pt = (e, t, r) => (
      (r = e != null ? it(lt(e)) : {}),
      ft(
        t || !e || !e.__esModule
          ? ie(r, 'default', { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    dt = se({
      'node_modules/is-object/index.js'(e, t) {
        'use strict'
        t.exports = function (n) {
          return typeof n == 'object' && n !== null
        }
      },
    }),
    mt = se({
      'node_modules/is-window/index.js'(e, t) {
        'use strict'
        t.exports = function (r) {
          if (r == null) return !1
          var n = Object(r)
          return n === n.window
        }
      },
    }),
    bt = se({
      'node_modules/is-dom/index.js'(e, t) {
        var r = dt(),
          n = mt()
        function o(i) {
          return !r(i) || !n(window) || typeof window.Node != 'function'
            ? !1
            : typeof i.nodeType == 'number' && typeof i.nodeName == 'string'
        }
        t.exports = o
      },
    }),
    Z = {}
  ct(Z, { chromeDark: () => gt, chromeLight: () => ht })
  var gt = {
      BASE_FONT_FAMILY: 'Menlo, monospace',
      BASE_FONT_SIZE: '11px',
      BASE_LINE_HEIGHT: 1.2,
      BASE_BACKGROUND_COLOR: 'rgb(36, 36, 36)',
      BASE_COLOR: 'rgb(213, 213, 213)',
      OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
      OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
      OBJECT_NAME_COLOR: 'rgb(227, 110, 236)',
      OBJECT_VALUE_NULL_COLOR: 'rgb(127, 127, 127)',
      OBJECT_VALUE_UNDEFINED_COLOR: 'rgb(127, 127, 127)',
      OBJECT_VALUE_REGEXP_COLOR: 'rgb(233, 63, 59)',
      OBJECT_VALUE_STRING_COLOR: 'rgb(233, 63, 59)',
      OBJECT_VALUE_SYMBOL_COLOR: 'rgb(233, 63, 59)',
      OBJECT_VALUE_NUMBER_COLOR: 'hsl(252, 100%, 75%)',
      OBJECT_VALUE_BOOLEAN_COLOR: 'hsl(252, 100%, 75%)',
      OBJECT_VALUE_FUNCTION_PREFIX_COLOR: 'rgb(85, 106, 242)',
      HTML_TAG_COLOR: 'rgb(93, 176, 215)',
      HTML_TAGNAME_COLOR: 'rgb(93, 176, 215)',
      HTML_TAGNAME_TEXT_TRANSFORM: 'lowercase',
      HTML_ATTRIBUTE_NAME_COLOR: 'rgb(155, 187, 220)',
      HTML_ATTRIBUTE_VALUE_COLOR: 'rgb(242, 151, 102)',
      HTML_COMMENT_COLOR: 'rgb(137, 137, 137)',
      HTML_DOCTYPE_COLOR: 'rgb(192, 192, 192)',
      ARROW_COLOR: 'rgb(145, 145, 145)',
      ARROW_MARGIN_RIGHT: 3,
      ARROW_FONT_SIZE: 12,
      ARROW_ANIMATION_DURATION: '0',
      TREENODE_FONT_FAMILY: 'Menlo, monospace',
      TREENODE_FONT_SIZE: '11px',
      TREENODE_LINE_HEIGHT: 1.2,
      TREENODE_PADDING_LEFT: 12,
      TABLE_BORDER_COLOR: 'rgb(85, 85, 85)',
      TABLE_TH_BACKGROUND_COLOR: 'rgb(44, 44, 44)',
      TABLE_TH_HOVER_COLOR: 'rgb(48, 48, 48)',
      TABLE_SORT_ICON_COLOR: 'black',
      TABLE_DATA_BACKGROUND_IMAGE:
        'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(51, 139, 255, 0.0980392))',
      TABLE_DATA_BACKGROUND_SIZE: '128px 32px',
    },
    ht = {
      BASE_FONT_FAMILY: 'Menlo, monospace',
      BASE_FONT_SIZE: '11px',
      BASE_LINE_HEIGHT: 1.2,
      BASE_BACKGROUND_COLOR: 'white',
      BASE_COLOR: 'black',
      OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
      OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
      OBJECT_NAME_COLOR: 'rgb(136, 19, 145)',
      OBJECT_VALUE_NULL_COLOR: 'rgb(128, 128, 128)',
      OBJECT_VALUE_UNDEFINED_COLOR: 'rgb(128, 128, 128)',
      OBJECT_VALUE_REGEXP_COLOR: 'rgb(196, 26, 22)',
      OBJECT_VALUE_STRING_COLOR: 'rgb(196, 26, 22)',
      OBJECT_VALUE_SYMBOL_COLOR: 'rgb(196, 26, 22)',
      OBJECT_VALUE_NUMBER_COLOR: 'rgb(28, 0, 207)',
      OBJECT_VALUE_BOOLEAN_COLOR: 'rgb(28, 0, 207)',
      OBJECT_VALUE_FUNCTION_PREFIX_COLOR: 'rgb(13, 34, 170)',
      HTML_TAG_COLOR: 'rgb(168, 148, 166)',
      HTML_TAGNAME_COLOR: 'rgb(136, 18, 128)',
      HTML_TAGNAME_TEXT_TRANSFORM: 'lowercase',
      HTML_ATTRIBUTE_NAME_COLOR: 'rgb(153, 69, 0)',
      HTML_ATTRIBUTE_VALUE_COLOR: 'rgb(26, 26, 166)',
      HTML_COMMENT_COLOR: 'rgb(35, 110, 37)',
      HTML_DOCTYPE_COLOR: 'rgb(192, 192, 192)',
      ARROW_COLOR: '#6e6e6e',
      ARROW_MARGIN_RIGHT: 3,
      ARROW_FONT_SIZE: 12,
      ARROW_ANIMATION_DURATION: '0',
      TREENODE_FONT_FAMILY: 'Menlo, monospace',
      TREENODE_FONT_SIZE: '11px',
      TREENODE_LINE_HEIGHT: 1.2,
      TREENODE_PADDING_LEFT: 12,
      TABLE_BORDER_COLOR: '#aaa',
      TABLE_TH_BACKGROUND_COLOR: '#eee',
      TABLE_TH_HOVER_COLOR: 'hsla(0, 0%, 90%, 1)',
      TABLE_SORT_ICON_COLOR: '#6e6e6e',
      TABLE_DATA_BACKGROUND_IMAGE:
        'linear-gradient(to bottom, white, white 50%, rgb(234, 243, 255) 50%, rgb(234, 243, 255))',
      TABLE_DATA_BACKGROUND_SIZE: '128px 32px',
    },
    ke = Y([{}, () => {}]),
    re = {
      WebkitTouchCallout: 'none',
      WebkitUserSelect: 'none',
      KhtmlUserSelect: 'none',
      MozUserSelect: 'none',
      msUserSelect: 'none',
      OUserSelect: 'none',
      userSelect: 'none',
    },
    q = (e) => ({
      DOMNodePreview: {
        htmlOpenTag: {
          base: { color: e.HTML_TAG_COLOR },
          tagName: {
            color: e.HTML_TAGNAME_COLOR,
            textTransform: e.HTML_TAGNAME_TEXT_TRANSFORM,
          },
          htmlAttributeName: { color: e.HTML_ATTRIBUTE_NAME_COLOR },
          htmlAttributeValue: { color: e.HTML_ATTRIBUTE_VALUE_COLOR },
        },
        htmlCloseTag: {
          base: { color: e.HTML_TAG_COLOR },
          offsetLeft: { marginLeft: -e.TREENODE_PADDING_LEFT },
          tagName: {
            color: e.HTML_TAGNAME_COLOR,
            textTransform: e.HTML_TAGNAME_TEXT_TRANSFORM,
          },
        },
        htmlComment: { color: e.HTML_COMMENT_COLOR },
        htmlDoctype: { color: e.HTML_DOCTYPE_COLOR },
      },
      ObjectPreview: {
        objectDescription: { fontStyle: 'italic' },
        preview: { fontStyle: 'italic' },
        arrayMaxProperties: e.OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES,
        objectMaxProperties: e.OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES,
      },
      ObjectName: {
        base: { color: e.OBJECT_NAME_COLOR },
        dimmed: { opacity: 0.6 },
      },
      ObjectValue: {
        objectValueNull: { color: e.OBJECT_VALUE_NULL_COLOR },
        objectValueUndefined: { color: e.OBJECT_VALUE_UNDEFINED_COLOR },
        objectValueRegExp: { color: e.OBJECT_VALUE_REGEXP_COLOR },
        objectValueString: { color: e.OBJECT_VALUE_STRING_COLOR },
        objectValueSymbol: { color: e.OBJECT_VALUE_SYMBOL_COLOR },
        objectValueNumber: { color: e.OBJECT_VALUE_NUMBER_COLOR },
        objectValueBoolean: { color: e.OBJECT_VALUE_BOOLEAN_COLOR },
        objectValueFunctionPrefix: {
          color: e.OBJECT_VALUE_FUNCTION_PREFIX_COLOR,
          fontStyle: 'italic',
        },
        objectValueFunctionName: { fontStyle: 'italic' },
      },
      TreeView: {
        treeViewOutline: { padding: 0, margin: 0, listStyleType: 'none' },
      },
      TreeNode: {
        treeNodeBase: {
          color: e.BASE_COLOR,
          backgroundColor: e.BASE_BACKGROUND_COLOR,
          lineHeight: e.TREENODE_LINE_HEIGHT,
          cursor: 'default',
          boxSizing: 'border-box',
          listStyle: 'none',
          fontFamily: e.TREENODE_FONT_FAMILY,
          fontSize: e.TREENODE_FONT_SIZE,
        },
        treeNodePreviewContainer: {},
        treeNodePlaceholder: {
          whiteSpace: 'pre',
          fontSize: e.ARROW_FONT_SIZE,
          marginRight: e.ARROW_MARGIN_RIGHT,
          ...re,
        },
        treeNodeArrow: {
          base: {
            color: e.ARROW_COLOR,
            display: 'inline-block',
            fontSize: e.ARROW_FONT_SIZE,
            marginRight: e.ARROW_MARGIN_RIGHT,
            ...(parseFloat(e.ARROW_ANIMATION_DURATION) > 0
              ? {
                  transition: `transform ${e.ARROW_ANIMATION_DURATION} ease 0s`,
                }
              : {}),
            ...re,
          },
          expanded: {
            WebkitTransform: 'rotateZ(90deg)',
            MozTransform: 'rotateZ(90deg)',
            transform: 'rotateZ(90deg)',
          },
          collapsed: {
            WebkitTransform: 'rotateZ(0deg)',
            MozTransform: 'rotateZ(0deg)',
            transform: 'rotateZ(0deg)',
          },
        },
        treeNodeChildNodesContainer: {
          margin: 0,
          paddingLeft: e.TREENODE_PADDING_LEFT,
        },
      },
      TableInspector: {
        base: {
          color: e.BASE_COLOR,
          position: 'relative',
          border: `1px solid ${e.TABLE_BORDER_COLOR}`,
          fontFamily: e.BASE_FONT_FAMILY,
          fontSize: e.BASE_FONT_SIZE,
          lineHeight: '120%',
          boxSizing: 'border-box',
          cursor: 'default',
        },
      },
      TableInspectorHeaderContainer: {
        base: {
          top: 0,
          height: '17px',
          left: 0,
          right: 0,
          overflowX: 'hidden',
        },
        table: {
          tableLayout: 'fixed',
          borderSpacing: 0,
          borderCollapse: 'separate',
          height: '100%',
          width: '100%',
          margin: 0,
        },
      },
      TableInspectorDataContainer: {
        tr: { display: 'table-row' },
        td: {
          boxSizing: 'border-box',
          border: 'none',
          height: '16px',
          verticalAlign: 'top',
          padding: '1px 4px',
          WebkitUserSelect: 'text',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          lineHeight: '14px',
        },
        div: {
          position: 'static',
          top: '17px',
          bottom: 0,
          overflowY: 'overlay',
          transform: 'translateZ(0)',
          left: 0,
          right: 0,
          overflowX: 'hidden',
        },
        table: {
          positon: 'static',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          borderTop: '0 none transparent',
          margin: 0,
          backgroundImage: e.TABLE_DATA_BACKGROUND_IMAGE,
          backgroundSize: e.TABLE_DATA_BACKGROUND_SIZE,
          tableLayout: 'fixed',
          borderSpacing: 0,
          borderCollapse: 'separate',
          width: '100%',
          fontSize: e.BASE_FONT_SIZE,
          lineHeight: '120%',
        },
      },
      TableInspectorTH: {
        base: {
          position: 'relative',
          height: 'auto',
          textAlign: 'left',
          backgroundColor: e.TABLE_TH_BACKGROUND_COLOR,
          borderBottom: `1px solid ${e.TABLE_BORDER_COLOR}`,
          fontWeight: 'normal',
          verticalAlign: 'middle',
          padding: '0 4px',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          lineHeight: '14px',
          ':hover': { backgroundColor: e.TABLE_TH_HOVER_COLOR },
        },
        div: {
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          fontSize: e.BASE_FONT_SIZE,
          lineHeight: '120%',
        },
      },
      TableInspectorLeftBorder: {
        none: { borderLeft: 'none' },
        solid: { borderLeft: `1px solid ${e.TABLE_BORDER_COLOR}` },
      },
      TableInspectorSortIcon: {
        display: 'block',
        marginRight: 3,
        width: 8,
        height: 7,
        marginTop: -7,
        color: e.TABLE_SORT_ICON_COLOR,
        fontSize: 12,
        ...re,
      },
    }),
    ne = 'chromeLight',
    Ge = Y(q(Z[ne])),
    _ = (e) => J(Ge)[e],
    le =
      (e) =>
      ({ theme: r = ne, ...n }) => {
        let o = Le(() => {
          switch (Object.prototype.toString.call(r)) {
            case '[object String]':
              return q(Z[r])
            case '[object Object]':
              return q(r)
            default:
              return q(Z[ne])
          }
        }, [r])
        return a.createElement(
          Ge.Provider,
          { value: o },
          a.createElement(e, { ...n })
        )
      },
    Et = ({ expanded: e, styles: t }) =>
      a.createElement(
        'span',
        { style: { ...t.base, ...(e ? t.expanded : t.collapsed) } },
        '\u25B6'
      ),
    yt = U((e) => {
      e = {
        expanded: !0,
        nodeRenderer: ({ name: f }) => a.createElement('span', null, f),
        onClick: () => {},
        shouldShowArrow: !1,
        shouldShowPlaceholder: !0,
        ...e,
      }
      let {
          expanded: t,
          onClick: r,
          children: n,
          nodeRenderer: o,
          title: i,
          shouldShowArrow: u,
          shouldShowPlaceholder: s,
        } = e,
        l = _('TreeNode'),
        c = o
      return a.createElement(
        'li',
        {
          'aria-expanded': t,
          role: 'treeitem',
          style: l.treeNodeBase,
          title: i,
        },
        a.createElement(
          'div',
          { style: l.treeNodePreviewContainer, onClick: r },
          u || Ce.count(n) > 0
            ? a.createElement(Et, { expanded: t, styles: l.treeNodeArrow })
            : s &&
                a.createElement(
                  'span',
                  { style: l.treeNodePlaceholder },
                  '\xA0'
                ),
          a.createElement(c, { ...e })
        ),
        a.createElement(
          'ol',
          { role: 'group', style: l.treeNodeChildNodesContainer },
          t ? n : void 0
        )
      )
    }),
    K = '$',
    Fe = '*'
  function X(e, t) {
    return !t(e).next().done
  }
  var Ot = (e) =>
      Array.from({ length: e }, (t, r) =>
        [K].concat(Array.from({ length: r }, () => '*')).join('.')
      ),
    vt = (e, t, r, n, o) => {
      let i = []
          .concat(Ot(n))
          .concat(r)
          .filter((s) => typeof s == 'string'),
        u = []
      return (
        i.forEach((s) => {
          let l = s.split('.'),
            c = (f, d, p) => {
              if (p === l.length) {
                u.push(d)
                return
              }
              let E = l[p]
              if (p === 0) X(f, t) && (E === K || E === Fe) && c(f, K, p + 1)
              else if (E === Fe)
                for (let { name: h, data: y } of t(f))
                  X(y, t) && c(y, `${d}.${h}`, p + 1)
              else {
                let h = f[E]
                X(h, t) && c(h, `${d}.${E}`, p + 1)
              }
            }
          c(e, '', 0)
        }),
        u.reduce((s, l) => ((s[l] = !0), s), { ...o })
      )
    },
    Ve = U((e) => {
      let { data: t, dataIterator: r, path: n, depth: o, nodeRenderer: i } = e,
        [u, s] = J(ke),
        l = X(t, r),
        c = !!u[n],
        f = A(() => l && s((d) => ({ ...d, [n]: !c })), [l, s, n, c])
      return a.createElement(
        yt,
        {
          expanded: c,
          onClick: f,
          shouldShowArrow: l,
          shouldShowPlaceholder: o > 0,
          nodeRenderer: i,
          ...e,
        },
        c
          ? [...r(t)].map(({ name: d, data: p, ...E }) =>
              a.createElement(Ve, {
                name: d,
                data: p,
                depth: o + 1,
                path: `${n}.${d}`,
                key: d,
                dataIterator: r,
                nodeRenderer: i,
                ...E,
              })
            )
          : null
      )
    }),
    $e = U(
      ({
        name: e,
        data: t,
        dataIterator: r,
        nodeRenderer: n,
        expandPaths: o,
        expandLevel: i,
      }) => {
        let u = _('TreeView'),
          s = C({}),
          [, l] = s
        return (
          Ne(() => l((c) => vt(t, r, o, i, c)), [t, r, o, i]),
          a.createElement(
            ke.Provider,
            { value: s },
            a.createElement(
              'ol',
              { role: 'tree', style: u.treeViewOutline },
              a.createElement(Ve, {
                name: e,
                data: t,
                dataIterator: r,
                depth: 0,
                path: K,
                nodeRenderer: n,
              })
            )
          )
        )
      }
    ),
    ue = ({ name: e, dimmed: t = !1, styles: r = {} }) => {
      let n = _('ObjectName'),
        o = { ...n.base, ...(t ? n.dimmed : {}), ...r }
      return a.createElement('span', { style: o }, e)
    },
    k = ({ object: e, styles: t }) => {
      let r = _('ObjectValue'),
        n = (o) => ({ ...r[o], ...t })
      switch (typeof e) {
        case 'bigint':
          return a.createElement(
            'span',
            { style: n('objectValueNumber') },
            String(e),
            'n'
          )
        case 'number':
          return a.createElement(
            'span',
            { style: n('objectValueNumber') },
            String(e)
          )
        case 'string':
          return a.createElement(
            'span',
            { style: n('objectValueString') },
            '"',
            e,
            '"'
          )
        case 'boolean':
          return a.createElement(
            'span',
            { style: n('objectValueBoolean') },
            String(e)
          )
        case 'undefined':
          return a.createElement(
            'span',
            { style: n('objectValueUndefined') },
            'undefined'
          )
        case 'object':
          return e === null
            ? a.createElement('span', { style: n('objectValueNull') }, 'null')
            : e instanceof Date
            ? a.createElement('span', null, e.toString())
            : e instanceof RegExp
            ? a.createElement(
                'span',
                { style: n('objectValueRegExp') },
                e.toString()
              )
            : Array.isArray(e)
            ? a.createElement('span', null, `Array(${e.length})`)
            : e.constructor
            ? typeof e.constructor.isBuffer == 'function' &&
              e.constructor.isBuffer(e)
              ? a.createElement('span', null, `Buffer[${e.length}]`)
              : a.createElement('span', null, e.constructor.name)
            : a.createElement('span', null, 'Object')
        case 'function':
          return a.createElement(
            'span',
            null,
            a.createElement(
              'span',
              { style: n('objectValueFunctionPrefix') },
              '\u0192\xA0'
            ),
            a.createElement(
              'span',
              { style: n('objectValueFunctionName') },
              e.name,
              '()'
            )
          )
        case 'symbol':
          return a.createElement(
            'span',
            { style: n('objectValueSymbol') },
            e.toString()
          )
        default:
          return a.createElement('span', null)
      }
    },
    We = Object.prototype.hasOwnProperty,
    Tt = Object.prototype.propertyIsEnumerable
  function ae(e, t) {
    let r = Object.getOwnPropertyDescriptor(e, t)
    if (r.get)
      try {
        return r.get()
      } catch {
        return r.get
      }
    return e[t]
  }
  function ze(e, t) {
    return e.length === 0
      ? []
      : e.slice(1).reduce((r, n) => r.concat([t, n]), [e[0]])
  }
  var oe = ({ data: e }) => {
      let t = _('ObjectPreview'),
        r = e
      if (
        typeof r != 'object' ||
        r === null ||
        r instanceof Date ||
        r instanceof RegExp
      )
        return a.createElement(k, { object: r })
      if (Array.isArray(r)) {
        let n = t.arrayMaxProperties,
          o = r
            .slice(0, n)
            .map((u, s) => a.createElement(k, { key: s, object: u }))
        r.length > n &&
          o.push(a.createElement('span', { key: 'ellipsis' }, '\u2026'))
        let i = r.length
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(
            'span',
            { style: t.objectDescription },
            i === 0 ? '' : `(${i})\xA0`
          ),
          a.createElement('span', { style: t.preview }, '[', ze(o, ', '), ']')
        )
      } else {
        let n = t.objectMaxProperties,
          o = []
        for (let u in r)
          if (We.call(r, u)) {
            let s
            o.length === n - 1 &&
              Object.keys(r).length > n &&
              (s = a.createElement('span', { key: 'ellipsis' }, '\u2026'))
            let l = ae(r, u)
            if (
              (o.push(
                a.createElement(
                  'span',
                  { key: u },
                  a.createElement(ue, { name: u || '""' }),
                  ':\xA0',
                  a.createElement(k, { object: l }),
                  s
                )
              ),
              s)
            )
              break
          }
        let i = r.constructor ? r.constructor.name : 'Object'
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(
            'span',
            { style: t.objectDescription },
            i === 'Object' ? '' : `${i} `
          ),
          a.createElement('span', { style: t.preview }, '{', ze(o, ', '), '}')
        )
      }
    },
    _t = ({ name: e, data: t }) =>
      typeof e == 'string'
        ? a.createElement(
            'span',
            null,
            a.createElement(ue, { name: e }),
            a.createElement('span', null, ': '),
            a.createElement(oe, { data: t })
          )
        : a.createElement(oe, { data: t }),
    Rt = ({ name: e, data: t, isNonenumerable: r = !1 }) => {
      let n = t
      return a.createElement(
        'span',
        null,
        typeof e == 'string'
          ? a.createElement(ue, { name: e, dimmed: r })
          : a.createElement(oe, { data: e }),
        a.createElement('span', null, ': '),
        a.createElement(k, { object: n })
      )
    },
    St = (e, t) =>
      function* (n) {
        if (!((typeof n == 'object' && n !== null) || typeof n == 'function'))
          return
        let i = Array.isArray(n)
        if (!i && n[Symbol.iterator]) {
          let u = 0
          for (let s of n) {
            if (Array.isArray(s) && s.length === 2) {
              let [l, c] = s
              yield { name: l, data: c }
            } else yield { name: u.toString(), data: s }
            u++
          }
        } else {
          let u = Object.getOwnPropertyNames(n)
          t === !0 && !i ? u.sort() : typeof t == 'function' && u.sort(t)
          for (let s of u)
            if (Tt.call(n, s)) {
              let l = ae(n, s)
              yield { name: s || '""', data: l }
            } else if (e) {
              let l
              try {
                l = ae(n, s)
              } catch {}
              l !== void 0 && (yield { name: s, data: l, isNonenumerable: !0 })
            }
          e &&
            n !== Object.prototype &&
            (yield {
              name: '__proto__',
              data: Object.getPrototypeOf(n),
              isNonenumerable: !0,
            })
        }
      },
    At = ({ depth: e, name: t, data: r, isNonenumerable: n }) =>
      e === 0
        ? a.createElement(_t, { name: t, data: r })
        : a.createElement(Rt, { name: t, data: r, isNonenumerable: n }),
    Ct = ({
      showNonenumerable: e = !1,
      sortObjectKeys: t,
      nodeRenderer: r,
      ...n
    }) => {
      let o = St(e, t),
        i = r || At
      return a.createElement($e, { nodeRenderer: i, dataIterator: o, ...n })
    },
    xt = le(Ct)
  function wt(e) {
    if (typeof e == 'object') {
      let t = []
      if (Array.isArray(e)) {
        let n = e.length
        t = [...Array(n).keys()]
      } else e !== null && (t = Object.keys(e))
      let r = t.reduce((n, o) => {
        let i = e[o]
        return (
          typeof i == 'object' &&
            i !== null &&
            Object.keys(i).reduce((s, l) => (s.includes(l) || s.push(l), s), n),
          n
        )
      }, [])
      return { rowHeaders: t, colHeaders: r }
    }
  }
  var Nt = ({ rows: e, columns: t, rowsData: r }) => {
      let n = _('TableInspectorDataContainer'),
        o = _('TableInspectorLeftBorder')
      return a.createElement(
        'div',
        { style: n.div },
        a.createElement(
          'table',
          { style: n.table },
          a.createElement('colgroup', null),
          a.createElement(
            'tbody',
            null,
            e.map((i, u) =>
              a.createElement(
                'tr',
                { key: i, style: n.tr },
                a.createElement('td', { style: { ...n.td, ...o.none } }, i),
                t.map((s) => {
                  let l = r[u]
                  return typeof l == 'object' && l !== null && We.call(l, s)
                    ? a.createElement(
                        'td',
                        { key: s, style: { ...n.td, ...o.solid } },
                        a.createElement(k, { object: l[s] })
                      )
                    : a.createElement('td', {
                        key: s,
                        style: { ...n.td, ...o.solid },
                      })
                })
              )
            )
          )
        )
      )
    },
    Lt = (e) =>
      a.createElement(
        'div',
        {
          style: {
            position: 'absolute',
            top: 1,
            right: 0,
            bottom: 1,
            display: 'flex',
            alignItems: 'center',
          },
        },
        e.children
      ),
    It = ({ sortAscending: e }) => {
      let t = _('TableInspectorSortIcon'),
        r = e ? '\u25B2' : '\u25BC'
      return a.createElement('div', { style: t }, r)
    },
    He = ({
      sortAscending: e = !1,
      sorted: t = !1,
      onClick: r = void 0,
      borderStyle: n = {},
      children: o,
      ...i
    }) => {
      let u = _('TableInspectorTH'),
        [s, l] = C(!1),
        c = A(() => l(!0), []),
        f = A(() => l(!1), [])
      return a.createElement(
        'th',
        {
          ...i,
          style: { ...u.base, ...n, ...(s ? u.base[':hover'] : {}) },
          onMouseEnter: c,
          onMouseLeave: f,
          onClick: r,
        },
        a.createElement('div', { style: u.div }, o),
        t &&
          a.createElement(Lt, null, a.createElement(It, { sortAscending: e }))
      )
    },
    Dt = ({
      indexColumnText: e = '(index)',
      columns: t = [],
      sorted: r,
      sortIndexColumn: n,
      sortColumn: o,
      sortAscending: i,
      onTHClick: u,
      onIndexTHClick: s,
    }) => {
      let l = _('TableInspectorHeaderContainer'),
        c = _('TableInspectorLeftBorder')
      return a.createElement(
        'div',
        { style: l.base },
        a.createElement(
          'table',
          { style: l.table },
          a.createElement(
            'tbody',
            null,
            a.createElement(
              'tr',
              null,
              a.createElement(
                He,
                {
                  borderStyle: c.none,
                  sorted: r && n,
                  sortAscending: i,
                  onClick: s,
                },
                e
              ),
              t.map((f) =>
                a.createElement(
                  He,
                  {
                    borderStyle: c.solid,
                    key: f,
                    sorted: r && o === f,
                    sortAscending: i,
                    onClick: u.bind(null, f),
                  },
                  f
                )
              )
            )
          )
        )
      )
    },
    Mt = ({ data: e, columns: t }) => {
      let r = _('TableInspector'),
        [
          { sorted: n, sortIndexColumn: o, sortColumn: i, sortAscending: u },
          s,
        ] = C({
          sorted: !1,
          sortIndexColumn: !1,
          sortColumn: void 0,
          sortAscending: !1,
        }),
        l = A(() => {
          s(({ sortIndexColumn: h, sortAscending: y }) => ({
            sorted: !0,
            sortIndexColumn: !0,
            sortColumn: void 0,
            sortAscending: h ? !y : !0,
          }))
        }, []),
        c = A((h) => {
          s(({ sortColumn: y, sortAscending: O }) => ({
            sorted: !0,
            sortIndexColumn: !1,
            sortColumn: h,
            sortAscending: h === y ? !O : !0,
          }))
        }, [])
      if (typeof e != 'object' || e === null)
        return a.createElement('div', null)
      let { rowHeaders: f, colHeaders: d } = wt(e)
      t !== void 0 && (d = t)
      let p = f.map((h) => e[h]),
        E
      if (
        (i !== void 0
          ? (E = p.map((h, y) =>
              typeof h == 'object' && h !== null ? [h[i], y] : [void 0, y]
            ))
          : o && (E = f.map((h, y) => [f[y], y])),
        E !== void 0)
      ) {
        let h = (O, L) => (at, ot) => {
            let ye = O(at),
              Oe = O(ot),
              ve = typeof ye,
              Te = typeof Oe,
              _e = (H, Re) => (H < Re ? -1 : H > Re ? 1 : 0),
              z
            if (ve === Te) z = _e(ye, Oe)
            else {
              let H = {
                string: 0,
                number: 1,
                object: 2,
                symbol: 3,
                boolean: 4,
                undefined: 5,
                function: 6,
              }
              z = _e(H[ve], H[Te])
            }
            return L || (z = -z), z
          },
          y = E.sort(h((O) => O[0], u)).map((O) => O[1])
        ;(f = y.map((O) => f[O])), (p = y.map((O) => p[O]))
      }
      return a.createElement(
        'div',
        { style: r.base },
        a.createElement(Dt, {
          columns: d,
          sorted: n,
          sortIndexColumn: o,
          sortColumn: i,
          sortAscending: u,
          onTHClick: c,
          onIndexTHClick: l,
        }),
        a.createElement(Nt, { rows: f, columns: d, rowsData: p })
      )
    },
    Pt = le(Mt),
    Bt = 80,
    Ye = (e) =>
      e.childNodes.length === 0 ||
      (e.childNodes.length === 1 &&
        e.childNodes[0].nodeType === Node.TEXT_NODE &&
        e.textContent.length < Bt),
    Ft = ({ tagName: e, attributes: t, styles: r }) =>
      a.createElement(
        'span',
        { style: r.base },
        '<',
        a.createElement('span', { style: r.tagName }, e),
        (() => {
          if (t) {
            let n = []
            for (let o = 0; o < t.length; o++) {
              let i = t[o]
              n.push(
                a.createElement(
                  'span',
                  { key: o },
                  ' ',
                  a.createElement(
                    'span',
                    { style: r.htmlAttributeName },
                    i.name
                  ),
                  '="',
                  a.createElement(
                    'span',
                    { style: r.htmlAttributeValue },
                    i.value
                  ),
                  '"'
                )
              )
            }
            return n
          }
        })(),
        '>'
      ),
    je = ({ tagName: e, isChildNode: t = !1, styles: r }) =>
      a.createElement(
        'span',
        { style: Object.assign({}, r.base, t && r.offsetLeft) },
        '</',
        a.createElement('span', { style: r.tagName }, e),
        '>'
      ),
    zt = {
      1: 'ELEMENT_NODE',
      3: 'TEXT_NODE',
      7: 'PROCESSING_INSTRUCTION_NODE',
      8: 'COMMENT_NODE',
      9: 'DOCUMENT_NODE',
      10: 'DOCUMENT_TYPE_NODE',
      11: 'DOCUMENT_FRAGMENT_NODE',
    },
    Ht = ({ isCloseTag: e, data: t, expanded: r }) => {
      let n = _('DOMNodePreview')
      if (e)
        return a.createElement(je, {
          styles: n.htmlCloseTag,
          isChildNode: !0,
          tagName: t.tagName,
        })
      switch (t.nodeType) {
        case Node.ELEMENT_NODE:
          return a.createElement(
            'span',
            null,
            a.createElement(Ft, {
              tagName: t.tagName,
              attributes: t.attributes,
              styles: n.htmlOpenTag,
            }),
            Ye(t) ? t.textContent : !r && '\u2026',
            !r &&
              a.createElement(je, {
                tagName: t.tagName,
                styles: n.htmlCloseTag,
              })
          )
        case Node.TEXT_NODE:
          return a.createElement('span', null, t.textContent)
        case Node.CDATA_SECTION_NODE:
          return a.createElement(
            'span',
            null,
            '<![CDATA[' + t.textContent + ']]>'
          )
        case Node.COMMENT_NODE:
          return a.createElement(
            'span',
            { style: n.htmlComment },
            '<!--',
            t.textContent,
            '-->'
          )
        case Node.PROCESSING_INSTRUCTION_NODE:
          return a.createElement('span', null, t.nodeName)
        case Node.DOCUMENT_TYPE_NODE:
          return a.createElement(
            'span',
            { style: n.htmlDoctype },
            '<!DOCTYPE ',
            t.name,
            t.publicId ? ` PUBLIC "${t.publicId}"` : '',
            !t.publicId && t.systemId ? ' SYSTEM' : '',
            t.systemId ? ` "${t.systemId}"` : '',
            '>'
          )
        case Node.DOCUMENT_NODE:
          return a.createElement('span', null, t.nodeName)
        case Node.DOCUMENT_FRAGMENT_NODE:
          return a.createElement('span', null, t.nodeName)
        default:
          return a.createElement('span', null, zt[t.nodeType])
      }
    },
    jt = function* (e) {
      if (e && e.childNodes) {
        if (Ye(e)) return
        for (let r = 0; r < e.childNodes.length; r++) {
          let n = e.childNodes[r]
          ;(n.nodeType === Node.TEXT_NODE &&
            n.textContent.trim().length === 0) ||
            (yield { name: `${n.tagName}[${r}]`, data: n })
        }
        e.tagName &&
          (yield {
            name: 'CLOSE_TAG',
            data: { tagName: e.tagName },
            isCloseTag: !0,
          })
      }
    },
    Ut = (e) =>
      a.createElement($e, { nodeRenderer: Ht, dataIterator: jt, ...e }),
    kt = le(Ut),
    Gt = pt(bt()),
    Je = ({ table: e = !1, data: t, ...r }) =>
      e
        ? a.createElement(Pt, { data: t, ...r })
        : (0, Gt.default)(t)
        ? a.createElement(kt, { data: t, ...r })
        : a.createElement(xt, { data: t, ...r })
  var Mo = __STORYBOOKCOMPONENTS__,
    {
      A: Po,
      ActionBar: qe,
      AddonPanel: Bo,
      Badge: Fo,
      Bar: zo,
      Blockquote: Ho,
      Button: jo,
      Code: Uo,
      DL: ko,
      Div: Go,
      DocumentWrapper: Vo,
      ErrorFormatter: $o,
      FlexBar: Wo,
      Form: Yo,
      H1: Jo,
      H2: qo,
      H3: Xo,
      H4: Zo,
      H5: Ko,
      H6: Qo,
      HR: ei,
      IconButton: ti,
      IconButtonSkeleton: ri,
      Icons: ni,
      Img: ai,
      LI: oi,
      Link: ii,
      ListItem: si,
      Loader: li,
      OL: ui,
      P: ci,
      Placeholder: fi,
      Pre: pi,
      ResetWrapper: di,
      ScrollArea: Xe,
      Separator: mi,
      Spaced: bi,
      Span: gi,
      StorybookIcon: hi,
      StorybookLogo: Ei,
      Symbols: yi,
      SyntaxHighlighter: Oi,
      TT: vi,
      TabBar: Ti,
      TabButton: _i,
      TabWrapper: Ri,
      Table: Si,
      Tabs: Ai,
      TabsState: Ci,
      TooltipLinkList: xi,
      TooltipMessage: wi,
      TooltipNote: Ni,
      UL: Li,
      WithTooltip: Ii,
      WithTooltipPure: Di,
      Zoom: Mi,
      codeCommon: Pi,
      components: Bi,
      createCopyToClipboardFunction: Fi,
      getStoryHref: zi,
      icons: Hi,
      interleaveSeparators: ji,
      nameSpaceClassNames: Ui,
      resetComponents: ki,
      withReset: Gi,
    } = __STORYBOOKCOMPONENTS__
  function v() {
    return (
      (v = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t]
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
          }),
      v.apply(this, arguments)
    )
  }
  function ce(e) {
    if (e === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      )
    return e
  }
  function S(e, t) {
    return (
      (S = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (n, o) {
            return (n.__proto__ = o), n
          }),
      S(e, t)
    )
  }
  function fe(e, t) {
    ;(e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      S(e, t)
  }
  function G(e) {
    return (
      (G = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (r) {
            return r.__proto__ || Object.getPrototypeOf(r)
          }),
      G(e)
    )
  }
  function pe(e) {
    return Function.toString.call(e).indexOf('[native code]') !== -1
  }
  function de() {
    if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
      return !1
    if (typeof Proxy == 'function') return !0
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        ),
        !0
      )
    } catch {
      return !1
    }
  }
  function P(e, t, r) {
    return (
      de()
        ? (P = Reflect.construct.bind())
        : (P = function (o, i, u) {
            var s = [null]
            s.push.apply(s, i)
            var l = Function.bind.apply(o, s),
              c = new l()
            return u && S(c, u.prototype), c
          }),
      P.apply(null, arguments)
    )
  }
  function V(e) {
    var t = typeof Map == 'function' ? new Map() : void 0
    return (
      (V = function (n) {
        if (n === null || !pe(n)) return n
        if (typeof n != 'function')
          throw new TypeError(
            'Super expression must either be null or a function'
          )
        if (typeof t < 'u') {
          if (t.has(n)) return t.get(n)
          t.set(n, o)
        }
        function o() {
          return P(n, arguments, G(this).constructor)
        }
        return (
          (o.prototype = Object.create(n.prototype, {
            constructor: {
              value: o,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          S(o, n)
        )
      }),
      V(e)
    )
  }
  var T = (function (e) {
    fe(t, e)
    function t(r) {
      var n
      if (!0)
        n =
          e.call(
            this,
            'An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#' +
              r +
              ' for more information.'
          ) || this
      else for (var o, i, u; u < o; u++);
      return ce(n)
    }
    return t
  })(V(Error))
  function Ze(e, t) {
    return e.substr(-t.length) === t
  }
  var Vt = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/
  function Ke(e) {
    if (typeof e != 'string') return e
    var t = e.match(Vt)
    return t ? parseFloat(e) : e
  }
  var $t = function (t) {
      return function (r, n) {
        n === void 0 && (n = '16px')
        var o = r,
          i = n
        if (typeof r == 'string') {
          if (!Ze(r, 'px')) throw new T(69, t, r)
          o = Ke(r)
        }
        if (typeof n == 'string') {
          if (!Ze(n, 'px')) throw new T(70, t, n)
          i = Ke(n)
        }
        if (typeof o == 'string') throw new T(71, r, t)
        if (typeof i == 'string') throw new T(72, n, t)
        return '' + o / i + t
      }
    },
    et = $t,
    Ys = et('em')
  var Js = et('rem')
  function me(e) {
    return Math.round(e * 255)
  }
  function Wt(e, t, r) {
    return me(e) + ',' + me(t) + ',' + me(r)
  }
  function $(e, t, r, n) {
    if ((n === void 0 && (n = Wt), t === 0)) return n(r, r, r)
    var o = (((e % 360) + 360) % 360) / 60,
      i = (1 - Math.abs(2 * r - 1)) * t,
      u = i * (1 - Math.abs((o % 2) - 1)),
      s = 0,
      l = 0,
      c = 0
    o >= 0 && o < 1
      ? ((s = i), (l = u))
      : o >= 1 && o < 2
      ? ((s = u), (l = i))
      : o >= 2 && o < 3
      ? ((l = i), (c = u))
      : o >= 3 && o < 4
      ? ((l = u), (c = i))
      : o >= 4 && o < 5
      ? ((s = u), (c = i))
      : o >= 5 && o < 6 && ((s = i), (c = u))
    var f = r - i / 2,
      d = s + f,
      p = l + f,
      E = c + f
    return n(d, p, E)
  }
  var Qe = {
    aliceblue: 'f0f8ff',
    antiquewhite: 'faebd7',
    aqua: '00ffff',
    aquamarine: '7fffd4',
    azure: 'f0ffff',
    beige: 'f5f5dc',
    bisque: 'ffe4c4',
    black: '000',
    blanchedalmond: 'ffebcd',
    blue: '0000ff',
    blueviolet: '8a2be2',
    brown: 'a52a2a',
    burlywood: 'deb887',
    cadetblue: '5f9ea0',
    chartreuse: '7fff00',
    chocolate: 'd2691e',
    coral: 'ff7f50',
    cornflowerblue: '6495ed',
    cornsilk: 'fff8dc',
    crimson: 'dc143c',
    cyan: '00ffff',
    darkblue: '00008b',
    darkcyan: '008b8b',
    darkgoldenrod: 'b8860b',
    darkgray: 'a9a9a9',
    darkgreen: '006400',
    darkgrey: 'a9a9a9',
    darkkhaki: 'bdb76b',
    darkmagenta: '8b008b',
    darkolivegreen: '556b2f',
    darkorange: 'ff8c00',
    darkorchid: '9932cc',
    darkred: '8b0000',
    darksalmon: 'e9967a',
    darkseagreen: '8fbc8f',
    darkslateblue: '483d8b',
    darkslategray: '2f4f4f',
    darkslategrey: '2f4f4f',
    darkturquoise: '00ced1',
    darkviolet: '9400d3',
    deeppink: 'ff1493',
    deepskyblue: '00bfff',
    dimgray: '696969',
    dimgrey: '696969',
    dodgerblue: '1e90ff',
    firebrick: 'b22222',
    floralwhite: 'fffaf0',
    forestgreen: '228b22',
    fuchsia: 'ff00ff',
    gainsboro: 'dcdcdc',
    ghostwhite: 'f8f8ff',
    gold: 'ffd700',
    goldenrod: 'daa520',
    gray: '808080',
    green: '008000',
    greenyellow: 'adff2f',
    grey: '808080',
    honeydew: 'f0fff0',
    hotpink: 'ff69b4',
    indianred: 'cd5c5c',
    indigo: '4b0082',
    ivory: 'fffff0',
    khaki: 'f0e68c',
    lavender: 'e6e6fa',
    lavenderblush: 'fff0f5',
    lawngreen: '7cfc00',
    lemonchiffon: 'fffacd',
    lightblue: 'add8e6',
    lightcoral: 'f08080',
    lightcyan: 'e0ffff',
    lightgoldenrodyellow: 'fafad2',
    lightgray: 'd3d3d3',
    lightgreen: '90ee90',
    lightgrey: 'd3d3d3',
    lightpink: 'ffb6c1',
    lightsalmon: 'ffa07a',
    lightseagreen: '20b2aa',
    lightskyblue: '87cefa',
    lightslategray: '789',
    lightslategrey: '789',
    lightsteelblue: 'b0c4de',
    lightyellow: 'ffffe0',
    lime: '0f0',
    limegreen: '32cd32',
    linen: 'faf0e6',
    magenta: 'f0f',
    maroon: '800000',
    mediumaquamarine: '66cdaa',
    mediumblue: '0000cd',
    mediumorchid: 'ba55d3',
    mediumpurple: '9370db',
    mediumseagreen: '3cb371',
    mediumslateblue: '7b68ee',
    mediumspringgreen: '00fa9a',
    mediumturquoise: '48d1cc',
    mediumvioletred: 'c71585',
    midnightblue: '191970',
    mintcream: 'f5fffa',
    mistyrose: 'ffe4e1',
    moccasin: 'ffe4b5',
    navajowhite: 'ffdead',
    navy: '000080',
    oldlace: 'fdf5e6',
    olive: '808000',
    olivedrab: '6b8e23',
    orange: 'ffa500',
    orangered: 'ff4500',
    orchid: 'da70d6',
    palegoldenrod: 'eee8aa',
    palegreen: '98fb98',
    paleturquoise: 'afeeee',
    palevioletred: 'db7093',
    papayawhip: 'ffefd5',
    peachpuff: 'ffdab9',
    peru: 'cd853f',
    pink: 'ffc0cb',
    plum: 'dda0dd',
    powderblue: 'b0e0e6',
    purple: '800080',
    rebeccapurple: '639',
    red: 'f00',
    rosybrown: 'bc8f8f',
    royalblue: '4169e1',
    saddlebrown: '8b4513',
    salmon: 'fa8072',
    sandybrown: 'f4a460',
    seagreen: '2e8b57',
    seashell: 'fff5ee',
    sienna: 'a0522d',
    silver: 'c0c0c0',
    skyblue: '87ceeb',
    slateblue: '6a5acd',
    slategray: '708090',
    slategrey: '708090',
    snow: 'fffafa',
    springgreen: '00ff7f',
    steelblue: '4682b4',
    tan: 'd2b48c',
    teal: '008080',
    thistle: 'd8bfd8',
    tomato: 'ff6347',
    turquoise: '40e0d0',
    violet: 'ee82ee',
    wheat: 'f5deb3',
    white: 'fff',
    whitesmoke: 'f5f5f5',
    yellow: 'ff0',
    yellowgreen: '9acd32',
  }
  function Yt(e) {
    if (typeof e != 'string') return e
    var t = e.toLowerCase()
    return Qe[t] ? '#' + Qe[t] : e
  }
  var Jt = /^#[a-fA-F0-9]{6}$/,
    qt = /^#[a-fA-F0-9]{8}$/,
    Xt = /^#[a-fA-F0-9]{3}$/,
    Zt = /^#[a-fA-F0-9]{4}$/,
    be = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
    Kt =
      /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
    Qt =
      /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
    er =
      /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i
  function B(e) {
    if (typeof e != 'string') throw new T(3)
    var t = Yt(e)
    if (t.match(Jt))
      return {
        red: parseInt('' + t[1] + t[2], 16),
        green: parseInt('' + t[3] + t[4], 16),
        blue: parseInt('' + t[5] + t[6], 16),
      }
    if (t.match(qt)) {
      var r = parseFloat((parseInt('' + t[7] + t[8], 16) / 255).toFixed(2))
      return {
        red: parseInt('' + t[1] + t[2], 16),
        green: parseInt('' + t[3] + t[4], 16),
        blue: parseInt('' + t[5] + t[6], 16),
        alpha: r,
      }
    }
    if (t.match(Xt))
      return {
        red: parseInt('' + t[1] + t[1], 16),
        green: parseInt('' + t[2] + t[2], 16),
        blue: parseInt('' + t[3] + t[3], 16),
      }
    if (t.match(Zt)) {
      var n = parseFloat((parseInt('' + t[4] + t[4], 16) / 255).toFixed(2))
      return {
        red: parseInt('' + t[1] + t[1], 16),
        green: parseInt('' + t[2] + t[2], 16),
        blue: parseInt('' + t[3] + t[3], 16),
        alpha: n,
      }
    }
    var o = be.exec(t)
    if (o)
      return {
        red: parseInt('' + o[1], 10),
        green: parseInt('' + o[2], 10),
        blue: parseInt('' + o[3], 10),
      }
    var i = Kt.exec(t.substring(0, 50))
    if (i)
      return {
        red: parseInt('' + i[1], 10),
        green: parseInt('' + i[2], 10),
        blue: parseInt('' + i[3], 10),
        alpha:
          parseFloat('' + i[4]) > 1
            ? parseFloat('' + i[4]) / 100
            : parseFloat('' + i[4]),
      }
    var u = Qt.exec(t)
    if (u) {
      var s = parseInt('' + u[1], 10),
        l = parseInt('' + u[2], 10) / 100,
        c = parseInt('' + u[3], 10) / 100,
        f = 'rgb(' + $(s, l, c) + ')',
        d = be.exec(f)
      if (!d) throw new T(4, t, f)
      return {
        red: parseInt('' + d[1], 10),
        green: parseInt('' + d[2], 10),
        blue: parseInt('' + d[3], 10),
      }
    }
    var p = er.exec(t.substring(0, 50))
    if (p) {
      var E = parseInt('' + p[1], 10),
        h = parseInt('' + p[2], 10) / 100,
        y = parseInt('' + p[3], 10) / 100,
        O = 'rgb(' + $(E, h, y) + ')',
        L = be.exec(O)
      if (!L) throw new T(4, t, O)
      return {
        red: parseInt('' + L[1], 10),
        green: parseInt('' + L[2], 10),
        blue: parseInt('' + L[3], 10),
        alpha:
          parseFloat('' + p[4]) > 1
            ? parseFloat('' + p[4]) / 100
            : parseFloat('' + p[4]),
      }
    }
    throw new T(5)
  }
  function tr(e) {
    var t = e.red / 255,
      r = e.green / 255,
      n = e.blue / 255,
      o = Math.max(t, r, n),
      i = Math.min(t, r, n),
      u = (o + i) / 2
    if (o === i)
      return e.alpha !== void 0
        ? { hue: 0, saturation: 0, lightness: u, alpha: e.alpha }
        : { hue: 0, saturation: 0, lightness: u }
    var s,
      l = o - i,
      c = u > 0.5 ? l / (2 - o - i) : l / (o + i)
    switch (o) {
      case t:
        s = (r - n) / l + (r < n ? 6 : 0)
        break
      case r:
        s = (n - t) / l + 2
        break
      default:
        s = (t - r) / l + 4
        break
    }
    return (
      (s *= 60),
      e.alpha !== void 0
        ? { hue: s, saturation: c, lightness: u, alpha: e.alpha }
        : { hue: s, saturation: c, lightness: u }
    )
  }
  function x(e) {
    return tr(B(e))
  }
  var rr = function (t) {
      return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6]
        ? '#' + t[1] + t[3] + t[5]
        : t
    },
    he = rr
  function N(e) {
    var t = e.toString(16)
    return t.length === 1 ? '0' + t : t
  }
  function ge(e) {
    return N(Math.round(e * 255))
  }
  function nr(e, t, r) {
    return he('#' + ge(e) + ge(t) + ge(r))
  }
  function Q(e, t, r) {
    return $(e, t, r, nr)
  }
  function ar(e, t, r) {
    if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number')
      return Q(e, t, r)
    if (typeof e == 'object' && t === void 0 && r === void 0)
      return Q(e.hue, e.saturation, e.lightness)
    throw new T(1)
  }
  function or(e, t, r, n) {
    if (
      typeof e == 'number' &&
      typeof t == 'number' &&
      typeof r == 'number' &&
      typeof n == 'number'
    )
      return n >= 1 ? Q(e, t, r) : 'rgba(' + $(e, t, r) + ',' + n + ')'
    if (typeof e == 'object' && t === void 0 && r === void 0 && n === void 0)
      return e.alpha >= 1
        ? Q(e.hue, e.saturation, e.lightness)
        : 'rgba(' + $(e.hue, e.saturation, e.lightness) + ',' + e.alpha + ')'
    throw new T(2)
  }
  function Ee(e, t, r) {
    if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number')
      return he('#' + N(e) + N(t) + N(r))
    if (typeof e == 'object' && t === void 0 && r === void 0)
      return he('#' + N(e.red) + N(e.green) + N(e.blue))
    throw new T(6)
  }
  function ee(e, t, r, n) {
    if (typeof e == 'string' && typeof t == 'number') {
      var o = B(e)
      return 'rgba(' + o.red + ',' + o.green + ',' + o.blue + ',' + t + ')'
    } else {
      if (
        typeof e == 'number' &&
        typeof t == 'number' &&
        typeof r == 'number' &&
        typeof n == 'number'
      )
        return n >= 1
          ? Ee(e, t, r)
          : 'rgba(' + e + ',' + t + ',' + r + ',' + n + ')'
      if (typeof e == 'object' && t === void 0 && r === void 0 && n === void 0)
        return e.alpha >= 1
          ? Ee(e.red, e.green, e.blue)
          : 'rgba(' + e.red + ',' + e.green + ',' + e.blue + ',' + e.alpha + ')'
    }
    throw new T(7)
  }
  var ir = function (t) {
      return (
        typeof t.red == 'number' &&
        typeof t.green == 'number' &&
        typeof t.blue == 'number' &&
        (typeof t.alpha != 'number' || typeof t.alpha > 'u')
      )
    },
    sr = function (t) {
      return (
        typeof t.red == 'number' &&
        typeof t.green == 'number' &&
        typeof t.blue == 'number' &&
        typeof t.alpha == 'number'
      )
    },
    lr = function (t) {
      return (
        typeof t.hue == 'number' &&
        typeof t.saturation == 'number' &&
        typeof t.lightness == 'number' &&
        (typeof t.alpha != 'number' || typeof t.alpha > 'u')
      )
    },
    ur = function (t) {
      return (
        typeof t.hue == 'number' &&
        typeof t.saturation == 'number' &&
        typeof t.lightness == 'number' &&
        typeof t.alpha == 'number'
      )
    }
  function w(e) {
    if (typeof e != 'object') throw new T(8)
    if (sr(e)) return ee(e)
    if (ir(e)) return Ee(e)
    if (ur(e)) return or(e)
    if (lr(e)) return ar(e)
    throw new T(8)
  }
  function tt(e, t, r) {
    return function () {
      var o = r.concat(Array.prototype.slice.call(arguments))
      return o.length >= t ? e.apply(this, o) : tt(e, t, o)
    }
  }
  function R(e) {
    return tt(e, e.length, [])
  }
  function cr(e, t) {
    if (t === 'transparent') return t
    var r = x(t)
    return w(v({}, r, { hue: r.hue + parseFloat(e) }))
  }
  var qs = R(cr)
  function F(e, t, r) {
    return Math.max(e, Math.min(t, r))
  }
  function fr(e, t) {
    if (t === 'transparent') return t
    var r = x(t)
    return w(v({}, r, { lightness: F(0, 1, r.lightness - parseFloat(e)) }))
  }
  var Xs = R(fr)
  function pr(e, t) {
    if (t === 'transparent') return t
    var r = x(t)
    return w(v({}, r, { saturation: F(0, 1, r.saturation - parseFloat(e)) }))
  }
  var Zs = R(pr)
  function dr(e, t) {
    if (t === 'transparent') return t
    var r = x(t)
    return w(v({}, r, { lightness: F(0, 1, r.lightness + parseFloat(e)) }))
  }
  var Ks = R(dr)
  function mr(e, t, r) {
    if (t === 'transparent') return r
    if (r === 'transparent') return t
    if (e === 0) return r
    var n = B(t),
      o = v({}, n, { alpha: typeof n.alpha == 'number' ? n.alpha : 1 }),
      i = B(r),
      u = v({}, i, { alpha: typeof i.alpha == 'number' ? i.alpha : 1 }),
      s = o.alpha - u.alpha,
      l = parseFloat(e) * 2 - 1,
      c = l * s === -1 ? l : l + s,
      f = 1 + l * s,
      d = (c / f + 1) / 2,
      p = 1 - d,
      E = {
        red: Math.floor(o.red * d + u.red * p),
        green: Math.floor(o.green * d + u.green * p),
        blue: Math.floor(o.blue * d + u.blue * p),
        alpha: o.alpha * parseFloat(e) + u.alpha * (1 - parseFloat(e)),
      }
    return ee(E)
  }
  var br = R(mr),
    rt = br
  function gr(e, t) {
    if (t === 'transparent') return t
    var r = B(t),
      n = typeof r.alpha == 'number' ? r.alpha : 1,
      o = v({}, r, { alpha: F(0, 1, (n * 100 + parseFloat(e) * 100) / 100) })
    return ee(o)
  }
  var hr = R(gr),
    nt = hr
  function Er(e, t) {
    if (t === 'transparent') return t
    var r = x(t)
    return w(v({}, r, { saturation: F(0, 1, r.saturation + parseFloat(e)) }))
  }
  var Qs = R(Er)
  function yr(e, t) {
    return t === 'transparent' ? t : w(v({}, x(t), { hue: parseFloat(e) }))
  }
  var el = R(yr)
  function Or(e, t) {
    return t === 'transparent'
      ? t
      : w(v({}, x(t), { lightness: parseFloat(e) }))
  }
  var tl = R(Or)
  function vr(e, t) {
    return t === 'transparent'
      ? t
      : w(v({}, x(t), { saturation: parseFloat(e) }))
  }
  var rl = R(vr)
  function Tr(e, t) {
    return t === 'transparent' ? t : rt(parseFloat(e), 'rgb(0, 0, 0)', t)
  }
  var nl = R(Tr)
  function _r(e, t) {
    return t === 'transparent' ? t : rt(parseFloat(e), 'rgb(255, 255, 255)', t)
  }
  var al = R(_r)
  function Rr(e, t) {
    if (t === 'transparent') return t
    var r = B(t),
      n = typeof r.alpha == 'number' ? r.alpha : 1,
      o = v({}, r, {
        alpha: F(0, 1, +(n * 100 - parseFloat(e) * 100).toFixed(2) / 100),
      })
    return ee(o)
  }
  var ol = R(Rr)
  var Sr = M.div({
      display: 'flex',
      padding: 0,
      borderLeft: '5px solid transparent',
      borderBottom: '1px solid transparent',
      transition: 'all 0.1s',
      alignItems: 'flex-start',
      whiteSpace: 'pre',
    }),
    Ar = M.div(({ theme: e }) => ({
      backgroundColor: nt(0.5, e.appBorderColor),
      color: e.color.inverseText,
      fontSize: e.typography.size.s1,
      fontWeight: e.typography.weight.bold,
      lineHeight: 1,
      padding: '1px 5px',
      borderRadius: 20,
      margin: '2px 0px',
    })),
    Cr = M.div({ flex: 1, padding: '0 0 0 5px' }),
    xr = ({ children: e, className: t }) =>
      a.createElement(Xe, { horizontal: !0, vertical: !0, className: t }, e),
    wr = M(xr)({ margin: 0, padding: '10px 5px 20px' }),
    Nr = Be(({ theme: e, ...t }) =>
      a.createElement(Je, {
        theme: e.addonActionsTheme || 'chromeLight',
        table: !1,
        ...t,
      })
    ),
    Lr = ({ actions: e, onClear: t }) =>
      a.createElement(
        we,
        null,
        a.createElement(
          wr,
          null,
          e.map((r) =>
            a.createElement(
              Sr,
              { key: r.id },
              r.count > 1 && a.createElement(Ar, null, r.count),
              a.createElement(
                Cr,
                null,
                a.createElement(Nr, {
                  sortObjectKeys: !0,
                  showNonenumerable: !1,
                  name: r.data.name,
                  data: r.data.args || r.data,
                })
              )
            )
          )
        ),
        a.createElement(qe, { actionItems: [{ title: 'Clear', onClick: t }] })
      ),
    Ir = (e, t) => {
      try {
        return D(e, t)
      } catch {
        return !1
      }
    },
    Dr = class extends xe {
      constructor(e) {
        super(e),
          (this.handleStoryChange = () => {
            let { actions: t } = this.state
            t.length > 0 &&
              t[0].options.clearOnStoryChange &&
              this.clearActions()
          }),
          (this.addAction = (t) => {
            this.setState((r) => {
              let n = [...r.actions],
                o = n.length && n[0]
              return (
                o && Ir(o.data, t.data)
                  ? o.count++
                  : ((t.count = 1), n.unshift(t)),
                { actions: n.slice(0, t.options.limit) }
              )
            })
          }),
          (this.clearActions = () => {
            this.setState({ actions: [] })
          }),
          (this.mounted = !1),
          (this.state = { actions: [] })
      }
      componentDidMount() {
        this.mounted = !0
        let { api: e } = this.props
        e.on(j, this.addAction), e.on(I, this.handleStoryChange)
      }
      componentWillUnmount() {
        this.mounted = !1
        let { api: e } = this.props
        e.off(I, this.handleStoryChange), e.off(j, this.addAction)
      }
      render() {
        let { actions: e = [] } = this.state,
          { active: t } = this.props,
          r = { actions: e, onClear: this.clearActions }
        return t ? a.createElement(Lr, { ...r }) : null
      }
    }
  function Mr({ count: e }) {
    let [t, r] = C(!1)
    De({
      [j]: () => {
        r((o) => !o)
      },
      [I]: () => {
        r((o) => !o)
      },
    })
    let n = e.current === 0 ? '' : ` (${e.current})`
    return a.createElement(a.Fragment, null, 'Actions', n)
  }
  te.register(W, (e) => {
    let t = { current: 0 }
    e.on(I, (r) => {
      t.current = 0
    }),
      e.on(j, () => {
        t.current += 1
      }),
      te.addPanel(Ae, {
        title: a.createElement(Mr, { count: t }),
        id: 'actions',
        type: Ie.PANEL,
        render: ({ active: r, key: n }) =>
          a.createElement(Dr, { key: n, api: e, active: !!r }),
        paramKey: Se,
      })
  })
} catch (e) {
  console.error(
    '[Storybook] One of your manager-entries failed: ' + import.meta.url,
    e
  )
}
//# sourceMappingURL=manager-bundle.mjs.map
