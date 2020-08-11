window.usabilla ||
  (function () {
    var a = window,
      d = a.document,
      c = {},
      f = d.createElement("div"),
      h = !1,
      a = (a.usabilla = function () {
        (c.a = c.a || []).push(arguments);
      });
    a._ = c;
    c.ids = {};
    f.style.display = "none";
    (function () {
      if (!d.body) return setTimeout(arguments.callee, 100);
      d.body.insertBefore(f, d.body.firstChild).id = "usabilla";
      h = !0;
    })();
    a.load = function (a, g, k) {
      if (!c.ids[g]) {
        var e = (c.ids = {});
        e.url = "//" + a + "/" + g + ".js?s1";
        e.config = k;
        setTimeout(function () {
          if (!h) return setTimeout(arguments.callee, 100);
          var b = d.createElement("iframe"),
            a;
          b.id = "usabilla-" + g;
          /MSIE[ ]+6/.test(navigator.userAgent) && (b.src = "javascript:false");
          f.appendChild(b);
          // try {
          //   b.contentWindow.document.open();
          // } catch (c) {
          //   (e.domain = d.domain),
          //     (a =
          //       "javascript:var d=document.open();d.domain='" +
          //       e.domain +
          //       "';"),
          //     (b.src = a + "void(0);");
          // }
          // try {
          //   var l = b.contentWindow.document;
          //   l.write(
          //     [
          //       "<!DOCTYPE html><html><head><\/head><body><script nonce=\"27f1992y\">window.onload = function () {var d = document;d.getElementsByTagName(\"head\")[0].appendChild(d.createElement(\"script\")).src='",
          //       e.url,
          //       "';};<\/script><\/body><\/html>",
          //     ].join("")
          //   );
          //   l.close();
          // } catch (m) {
          //   b.src =
          //     a +
          //     'd.write("' +
          //     loaderHtml().replace(/"/g, String.fromCharCode(92) + '"') +
          //     '");d.close();';
          // }

          newScript = d.createElement('script');
          newScript.type = 'text/javascript';
          newScript.src = e.url;
          b.contentWindow.document.body.appendChild(newScript);

          b.contentWindow.config = k;
          b.contentWindow.SCRIPT_ID = g;
        }, 0);
      }
    };
  })();
window.usabilla.load("w.usabilla.com", "3c677086ac75");
