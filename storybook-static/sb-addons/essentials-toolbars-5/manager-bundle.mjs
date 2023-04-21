try {
  var r = __REACT__,
    {
      Children: ie,
      Component: se,
      Fragment: ce,
      Profiler: ue,
      PureComponent: me,
      StrictMode: pe,
      Suspense: de,
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: be,
      cloneElement: Se,
      createContext: fe,
      createElement: Te,
      createFactory: ye,
      createRef: Oe,
      forwardRef: _e,
      isValidElement: Ce,
      lazy: Ie,
      memo: ve,
      useCallback: y,
      useContext: ge,
      useDebugValue: Ee,
      useEffect: R,
      useImperativeHandle: xe,
      useLayoutEffect: he,
      useMemo: Re,
      useReducer: ke,
      useRef: B,
      useState: P,
      version: Ae,
    } = __REACT__
  var Me = __STORYBOOKAPI__,
    {
      ActiveTabs: we,
      Consumer: Ge,
      ManagerContext: He,
      Provider: Ve,
      addons: k,
      combineParameters: De,
      controlOrMetaKey: Fe,
      controlOrMetaSymbol: Ke,
      eventMatchesShortcut: We,
      eventToShortcut: Ye,
      isMacLike: $e,
      isShortcutTaken: Ue,
      keyToSymbol: ze,
      merge: je,
      mockChannel: qe,
      optionOrAltSymbol: Ze,
      shortcutMatchesShortcut: Je,
      shortcutToHumanString: Qe,
      types: N,
      useAddonState: Xe,
      useArgTypes: et,
      useArgs: tt,
      useChannel: ot,
      useGlobalTypes: M,
      useGlobals: g,
      useParameter: rt,
      useSharedState: at,
      useStoryPrepared: lt,
      useStorybookApi: w,
      useStorybookState: nt,
    } = __STORYBOOKAPI__
  var mt = __STORYBOOKCOMPONENTS__,
    {
      A: pt,
      ActionBar: dt,
      AddonPanel: bt,
      Badge: St,
      Bar: ft,
      Blockquote: Tt,
      Button: yt,
      Code: Ot,
      DL: _t,
      Div: Ct,
      DocumentWrapper: It,
      ErrorFormatter: vt,
      FlexBar: gt,
      Form: Et,
      H1: xt,
      H2: ht,
      H3: Rt,
      H4: kt,
      H5: At,
      H6: Lt,
      HR: Bt,
      IconButton: G,
      IconButtonSkeleton: Pt,
      Icons: E,
      Img: Nt,
      LI: Mt,
      Link: wt,
      ListItem: Gt,
      Loader: Ht,
      OL: Vt,
      P: Dt,
      Placeholder: Ft,
      Pre: Kt,
      ResetWrapper: Wt,
      ScrollArea: Yt,
      Separator: H,
      Spaced: $t,
      Span: Ut,
      StorybookIcon: zt,
      StorybookLogo: jt,
      Symbols: qt,
      SyntaxHighlighter: Zt,
      TT: Jt,
      TabBar: Qt,
      TabButton: Xt,
      TabWrapper: eo,
      Table: to,
      Tabs: oo,
      TabsState: ro,
      TooltipLinkList: V,
      TooltipMessage: ao,
      TooltipNote: lo,
      UL: no,
      WithTooltip: D,
      WithTooltipPure: io,
      Zoom: so,
      codeCommon: co,
      components: uo,
      createCopyToClipboardFunction: mo,
      getStoryHref: po,
      icons: bo,
      interleaveSeparators: So,
      nameSpaceClassNames: fo,
      resetComponents: To,
      withReset: yo,
    } = __STORYBOOKCOMPONENTS__
  var vo = __STORYBOOKCLIENTLOGGER__,
    {
      deprecate: A,
      logger: go,
      once: Eo,
      pretty: xo,
    } = __STORYBOOKCLIENTLOGGER__
  var W = ({ active: o, title: t, icon: e, description: a, onClick: l }) =>
      r.createElement(
        G,
        { active: o, title: a, onClick: l },
        e && r.createElement(E, { icon: e }),
        t ? `\xA0${t}` : null
      ),
    Y = ['reset'],
    $ = (o) => o.filter((t) => !Y.includes(t.type)).map((t) => t.value),
    O = 'addon-toolbars',
    U = async (o, t, e) => {
      e &&
        e.next &&
        (await o.setAddonShortcut(O, {
          label: e.next.label,
          defaultShortcut: e.next.keys,
          actionName: `${t}:next`,
          action: e.next.action,
        })),
        e &&
          e.previous &&
          (await o.setAddonShortcut(O, {
            label: e.previous.label,
            defaultShortcut: e.previous.keys,
            actionName: `${t}:previous`,
            action: e.previous.action,
          })),
        e &&
          e.reset &&
          (await o.setAddonShortcut(O, {
            label: e.reset.label,
            defaultShortcut: e.reset.keys,
            actionName: `${t}:reset`,
            action: e.reset.action,
          }))
    },
    z = (o) => (t) => {
      let {
          id: e,
          toolbar: { items: a, shortcuts: l },
        } = t,
        d = w(),
        [b, s] = g(),
        n = B([]),
        u = b[e],
        _ = y(() => {
          s({ [e]: '' })
        }, [s]),
        C = y(() => {
          let i = n.current,
            p = i.indexOf(u),
            m = p === i.length - 1 ? 0 : p + 1,
            c = n.current[m]
          s({ [e]: c })
        }, [n, u, s]),
        I = y(() => {
          let i = n.current,
            p = i.indexOf(u),
            m = p > -1 ? p : 0,
            c = m === 0 ? i.length - 1 : m - 1,
            x = n.current[c]
          s({ [e]: x })
        }, [n, u, s])
      return (
        R(() => {
          l &&
            U(d, e, {
              next: { ...l.next, action: C },
              previous: { ...l.previous, action: I },
              reset: { ...l.reset, action: _ },
            })
        }, [d, e, l, C, I, _]),
        R(() => {
          n.current = $(a)
        }, []),
        r.createElement(o, { cycleValues: n.current, ...t })
      )
    },
    F = ({ currentValue: o, items: t }) =>
      o != null && t.find((e) => e.value === o),
    j = ({ currentValue: o, items: t }) => {
      let e = F({ currentValue: o, items: t })
      if (e) return e.icon
    },
    q = ({ currentValue: o, items: t }) => {
      let e = F({ currentValue: o, items: t })
      if (e) return e.title
    },
    Z = ({
      left: o,
      right: t,
      title: e,
      value: a,
      icon: l,
      hideIcon: d,
      onClick: b,
      currentValue: s,
    }) => {
      let n = l && r.createElement(E, { style: { opacity: 1 }, icon: l }),
        u = {
          id: a || s,
          active: s === a,
          right: t,
          title: e,
          left: o,
          onClick: b,
        }
      return l && !d && (u.left = n), u
    },
    J = z(
      ({
        id: o,
        name: t,
        description: e,
        toolbar: {
          icon: a,
          items: l,
          title: d,
          showName: b,
          preventDynamicIcon: s,
          dynamicTitle: n,
        },
      }) => {
        let [u, _] = g(),
          [C, I] = P(!1),
          i = u[o],
          p = !!i,
          m = a,
          c = d
        s || (m = j({ currentValue: i, items: l }) || m),
          b && !c
            ? ((c = t),
              A(
                '`showName` is deprecated as `name` will stop having dual purposes in the future. Please specify a `title` in `globalTypes` instead.'
              ))
            : !b &&
              !m &&
              !c &&
              ((c = t),
              A(
                `Using the \`name\` "${t}" as toolbar title for backward compatibility. \`name\` will stop having dual purposes in the future. Please specify either a \`title\` or an \`icon\` in \`globalTypes\` instead.`
              )),
          n && (c = q({ currentValue: i, items: l }) || c)
        let x = y(
          (h) => {
            _({ [o]: h })
          },
          [i, _]
        )
        return r.createElement(
          D,
          {
            placement: 'top',
            tooltip: ({ onHide: h }) => {
              let K = l
                .filter(({ type: v }) => {
                  let L = !0
                  return v === 'reset' && !i && (L = !1), L
                })
                .map((v) =>
                  Z({
                    ...v,
                    currentValue: i,
                    onClick: () => {
                      x(v.value), h()
                    },
                  })
                )
              return r.createElement(V, { links: K })
            },
            closeOnOutsideClick: !0,
            onVisibleChange: I,
          },
          r.createElement(W, {
            active: C || p,
            description: e || '',
            icon: m,
            title: c || '',
          })
        )
      }
    ),
    Q = { type: 'item', value: '' },
    X = (o, t) => ({
      ...t,
      name: t.name || o,
      description: t.description || o,
      toolbar: {
        ...t.toolbar,
        items: t.toolbar.items.map((e) => {
          let a = typeof e == 'string' ? { value: e, title: e } : e
          return (
            a.type === 'reset' &&
              t.toolbar.icon &&
              ((a.icon = t.toolbar.icon), (a.hideIcon = !0)),
            { ...Q, ...a }
          )
        }),
      },
    }),
    ee = () => {
      let o = M(),
        t = Object.keys(o).filter((e) => !!o[e].toolbar)
      return t.length
        ? r.createElement(
            r.Fragment,
            null,
            r.createElement(H, null),
            t.map((e) => {
              let a = X(e, o[e])
              return r.createElement(J, { key: e, id: e, ...a })
            })
          )
        : null
    }
  k.register(O, () =>
    k.add(O, {
      title: O,
      id: 'toolbar',
      type: N.TOOL,
      match: () => !0,
      render: () => r.createElement(ee, null),
    })
  )
} catch (e) {
  console.error(
    '[Storybook] One of your manager-entries failed: ' + import.meta.url,
    e
  )
}
//# sourceMappingURL=manager-bundle.mjs.map
