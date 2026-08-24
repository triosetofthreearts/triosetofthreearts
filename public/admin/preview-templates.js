// ============================================================================
// TRIO — CMS LIVE PREVIEW TEMPLATES
// ----------------------------------------------------------------------------
// Gives the dashboard a right-hand preview pane that updates live as you
// type, styled with TRIO's real colors and fonts, so it looks like the
// actual site instead of a plain form.
// ============================================================================

var ink = "#0B1B32";
var inkSoft = "#122647";
var inkLine = "#1F3A63";
var bone = "#F3ECDD";
var boneDim = "#C8BEA6";
var brass = "#B8935A";
var brassBright = "#D8B67E";

var displayFont = '"Fraunces", Georgia, serif';
var bodyFont = '"Inter", -apple-system, sans-serif';

var wrapStyle = {
  background: ink,
  color: bone,
  fontFamily: bodyFont,
  minHeight: "100%",
  padding: "48px 32px",
};

var eyebrowStyle = {
  fontFamily: bodyFont,
  fontSize: "0.7rem",
  letterSpacing: "0.25em",
  textTransform: "uppercase",
  color: brassBright,
  marginBottom: "12px",
  display: "block",
};

var h1Style = {
  fontFamily: displayFont,
  fontSize: "2.4rem",
  lineHeight: 1.1,
  color: bone,
  margin: "0 0 16px 0",
  fontWeight: 500,
};

var bodyStyle = {
  fontFamily: bodyFont,
  fontSize: "1rem",
  lineHeight: 1.7,
  color: boneDim,
  maxWidth: "560px",
};

var imgStyle = {
  width: "100%",
  maxWidth: "420px",
  display: "block",
  objectFit: "cover",
  border: "1px solid " + inkLine,
  marginBottom: "28px",
};

var cardStyle = {
  border: "1px solid " + inkLine,
  background: inkSoft,
  padding: "24px",
  marginTop: "16px",
};

var buttonStyle = {
  display: "inline-block",
  marginTop: "24px",
  padding: "12px 28px",
  background: brass,
  color: ink,
  fontFamily: bodyFont,
  fontSize: "0.75rem",
  letterSpacing: "0.15em",
  textTransform: "uppercase",
};

function getVal(entry, path, fallback) {
  var v = entry.getIn(["data"].concat(path));
  return v === undefined || v === null ? fallback || "" : v;
}

// ----------------------------------------------------------------------------
// EVENTS
// ----------------------------------------------------------------------------
var EventPreview = createClass({
  render: function () {
    var entry = this.props.entry;
    var cover = getVal(entry, ["cover"]);
    var name = getVal(entry, ["name"], "Event Name");
    var dateLabel = getVal(entry, ["dateLabel"]);
    var location = getVal(entry, ["location"]);
    var tagline = getVal(entry, ["tagline"]);
    var presentedBy = getVal(entry, ["presentedBy"]);

    return h("div", { style: wrapStyle },
      h("span", { style: eyebrowStyle }, "Events"),
      cover && h("img", { src: this.props.getAsset(cover).toString(), style: imgStyle }),
      h("h1", { style: h1Style }, name),
      h("p", { style: { ...bodyStyle, color: brassBright, marginBottom: "8px" } },
        [dateLabel, location].filter(Boolean).join("  ·  ")
      ),
      presentedBy && h("p", { style: { ...bodyStyle, fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" } }, presentedBy),
      h("p", { style: { ...bodyStyle, marginTop: "20px", fontFamily: displayFont, fontSize: "1.2rem", color: bone } }, tagline),
      h("span", { style: buttonStyle }, "Register For This Event")
    );
  },
});

// ----------------------------------------------------------------------------
// WHAT'S NEW / UPDATES
// ----------------------------------------------------------------------------
var UpdatePreview = createClass({
  render: function () {
    var entry = this.props.entry;
    var image = getVal(entry, ["image"]);
    var title = getVal(entry, ["title"], "Update Title");
    var category = getVal(entry, ["category"]);
    var summary = getVal(entry, ["summary"]);
    var description = getVal(entry, ["description"]);
    var presentedBy = getVal(entry, ["presentedBy"]);

    return h("div", { style: wrapStyle },
      h("span", { style: eyebrowStyle }, category || "What's New"),
      image && h("img", { src: this.props.getAsset(image).toString(), style: { ...imgStyle, maxWidth: "320px" } }),
      h("h1", { style: h1Style }, title),
      presentedBy && h("p", { style: { ...bodyStyle, fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" } }, presentedBy),
      h("p", { style: { ...bodyStyle, fontFamily: displayFont, fontSize: "1.15rem", color: bone } }, summary),
      description && h("p", { style: { ...bodyStyle, marginTop: "16px" } }, description)
    );
  },
});

// ----------------------------------------------------------------------------
// TESTIMONIALS
// ----------------------------------------------------------------------------
var TestimonialPreview = createClass({
  render: function () {
    var entry = this.props.entry;
    var name = getVal(entry, ["name"], "Name");
    var role = getVal(entry, ["role"]);
    var quote = getVal(entry, ["quote"], "Quote goes here...");
    var photo = getVal(entry, ["photo"]);

    return h("div", { style: wrapStyle },
      h("span", { style: eyebrowStyle }, "Testimonial"),
      h("div", { style: { ...cardStyle, maxWidth: "480px" } },
        h("span", { style: { fontFamily: displayFont, fontSize: "3rem", color: "rgba(184,147,90,0.4)", lineHeight: 0.5, display: "block" } }, "\u201C"),
        h("p", { style: { fontFamily: displayFont, fontSize: "1.2rem", color: bone, lineHeight: 1.5, margin: "12px 0 24px" } }, quote),
        h("div", { style: { display: "flex", alignItems: "center", gap: "12px" } },
          photo
            ? h("img", { src: this.props.getAsset(photo).toString(), style: { width: "44px", height: "44px", borderRadius: "50%", objectFit: "cover" } })
            : h("div", { style: { width: "44px", height: "44px", borderRadius: "50%", background: ink, display: "flex", alignItems: "center", justifyContent: "center", color: brass } }, (name || "?")[0]),
          h("div", {},
            h("p", { style: { fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: bone, margin: 0 } }, name),
            role && h("p", { style: { fontSize: "0.7rem", color: boneDim, margin: "2px 0 0" } }, role)
          )
        )
      )
    );
  },
});

// ----------------------------------------------------------------------------
// BLOG
// ----------------------------------------------------------------------------
var BlogPreview = createClass({
  render: function () {
    var entry = this.props.entry;
    var title = getVal(entry, ["title"], "Post Title");
    var author = getVal(entry, ["author"]);
    var date = getVal(entry, ["date"]);
    var cover = getVal(entry, ["cover"]);
    var body = getVal(entry, ["body"]);

    return h("div", { style: wrapStyle },
      h("span", { style: eyebrowStyle }, [date, author].filter(Boolean).join("  ·  ") || "Blog"),
      h("h1", { style: h1Style }, title),
      cover && h("img", { src: this.props.getAsset(cover).toString(), style: { ...imgStyle, maxWidth: "100%", aspectRatio: "16/9" } }),
      h("div", { style: bodyStyle }, this.props.widgetFor("body"))
    );
  },
});

// ----------------------------------------------------------------------------
// GALLERY (both homepage strip + full gallery page)
// ----------------------------------------------------------------------------
var GalleryPreview = createClass({
  render: function () {
    var entry = this.props.entry;
    var images = entry.getIn(["data", "images"]);
    var list = images ? images.toJS() : [];
    var self = this;

    return h("div", { style: wrapStyle },
      h("span", { style: eyebrowStyle }, "Gallery"),
      h("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px" } },
        list.slice(0, 9).map(function (img, i) {
          return img.src
            ? h("img", { key: i, src: self.props.getAsset(img.src).toString(), style: { width: "100%", aspectRatio: "1", objectFit: "cover", border: "1px solid " + inkLine } })
            : null;
        })
      )
    );
  },
});

// ----------------------------------------------------------------------------
// SITE SETTINGS
// ----------------------------------------------------------------------------
var SettingsPreview = createClass({
  render: function () {
    var entry = this.props.entry;
    var latest = getVal(entry, ["latestVideoUrl"]);
    var live = getVal(entry, ["liveStreamUrl"]);

    return h("div", { style: wrapStyle },
      h("span", { style: eyebrowStyle }, "Site Settings"),
      h("h1", { style: { ...h1Style, fontSize: "1.8rem" } }, "How this affects the site"),
      h("div", { style: cardStyle },
        h("p", { style: { ...bodyStyle, color: bone, marginBottom: "4px" } }, "Homepage \u2014 Latest Upload section"),
        h("p", { style: bodyStyle }, latest ? "Will show an embedded player for: " + latest : "Hidden (no URL set)")
      ),
      h("div", { style: cardStyle },
        h("p", { style: { ...bodyStyle, color: bone, marginBottom: "4px" } }, "/live page"),
        h("p", { style: bodyStyle }, live ? "\uD83D\uDD34 LIVE NOW banner will show, playing: " + live : "Shows 'nothing live right now' state")
      )
    );
  },
});

// ----------------------------------------------------------------------------
// TEAM
// ----------------------------------------------------------------------------
var TeamPreview = createClass({
  render: function () {
    var entry = this.props.entry;
    var name = getVal(entry, ["name"], "Name");
    var role = getVal(entry, ["role"]);
    var discipline = getVal(entry, ["discipline"]);
    var bio = getVal(entry, ["bio"]);
    var photo = getVal(entry, ["photo"]);

    return h("div", { style: wrapStyle },
      h("span", { style: eyebrowStyle }, discipline || "Team"),
      photo && h("img", { src: this.props.getAsset(photo).toString(), style: { ...imgStyle, maxWidth: "280px", aspectRatio: "3/4", objectFit: "cover" } }),
      h("h1", { style: h1Style }, name),
      h("p", { style: { ...bodyStyle, color: brassBright, marginBottom: "16px" } }, role),
      h("p", { style: bodyStyle }, bio)
    );
  },
});

// ----------------------------------------------------------------------------
// SITE IMAGES (hero / about / story break)
// ----------------------------------------------------------------------------
var SiteImagesPreview = createClass({
  render: function () {
    var entry = this.props.entry;
    var hero = getVal(entry, ["hero"]);
    var aboutPrimary = getVal(entry, ["aboutPrimary"]);
    var aboutSecondary = getVal(entry, ["aboutSecondary"]);
    var storyBreak = getVal(entry, ["storyBreak"]);
    var self = this;

    function row(label, src) {
      return h("div", { style: { marginBottom: "24px" } },
        h("p", { style: { ...bodyStyle, fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: brassBright, marginBottom: "8px" } }, label),
        src ? h("img", { src: self.props.getAsset(src).toString(), style: { ...imgStyle, maxWidth: "320px" } }) : h("p", { style: bodyStyle }, "No image set")
      );
    }

    return h("div", { style: wrapStyle },
      h("span", { style: eyebrowStyle }, "Homepage & About Imagery"),
      h("h1", { style: { ...h1Style, fontSize: "1.6rem", marginBottom: "24px" } }, "Where each photo appears"),
      row("Hero (homepage banner)", hero),
      row("About — Primary", aboutPrimary),
      row("About — Secondary", aboutSecondary),
      row("Story Break (full-width)", storyBreak)
    );
  },
});

CMS.registerPreviewTemplate("events", EventPreview);
CMS.registerPreviewTemplate("updates", UpdatePreview);
CMS.registerPreviewTemplate("testimonials", TestimonialPreview);
CMS.registerPreviewTemplate("blog", BlogPreview);
CMS.registerPreviewTemplate("gallery", GalleryPreview);
CMS.registerPreviewTemplate("site_gallery", GalleryPreview);
CMS.registerPreviewTemplate("team", TeamPreview);
CMS.registerPreviewTemplate("site_images", SiteImagesPreview);
CMS.registerPreviewTemplate("settings", SettingsPreview);

CMS.registerPreviewStyle(
  "body{background:" + ink + ";margin:0;}"
);
