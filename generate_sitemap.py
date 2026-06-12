#!/usr/bin/env python3
"""Auto-generates sitemap.xml by scanning all .html files in the repo."""
import os, datetime

BASE_URL = "https://clearlinesigns.com"
TODAY = datetime.date.today().isoformat()

EXCLUDE = {
    "thank-you.html", "404.html", "design-brief.html",
    "sign-copy-generator.html",
}

# Subpaths (relative to their subdirectory) that are redirect stubs
# or otherwise shouldn't be in the sitemap.
SUBDIR_EXCLUDE = {
    "cities": {"pricing.html"},
    "products": set(),
}

def get_priority(slug):
    slug = slug.strip("/")
    if slug in ("", "index.html"):      return "1.0"
    if slug in ("services.html", "portfolio.html", "cities.html"): return "0.8"
    if slug in ("contact.html",):       return "0.7"
    if slug in ("about.html",):         return "0.6"
    if slug in ("pricing.html",):       return "0.8"
    if slug.startswith("cities/"):
        high = {"cities/san-jose.html","cities/santa-clara.html",
                "cities/palo-alto.html","cities/oakland.html",
                "cities/san-francisco.html"}
        return "0.8" if slug in high else "0.7"
    if slug.startswith("products/"):    return "0.8"
    return "0.9"

def collect_urls():
    urls = []
    base = os.environ.get("REPO_DIR", ".")
    for fname in sorted(os.listdir(base)):
        if fname.endswith(".html") and fname not in EXCLUDE:
            path = "" if fname == "index.html" else fname
            urls.append((path, get_priority(path or "index.html")))
    for sub in ("cities", "products"):
        d = os.path.join(base, sub)
        if os.path.isdir(d):
            excl = SUBDIR_EXCLUDE.get(sub, set())
            for fname in sorted(os.listdir(d)):
                if fname.endswith(".html") and fname not in excl:
                    path = f"{sub}/{fname}"
                    urls.append((path, get_priority(path)))
    return urls

def build_sitemap(urls):
    lines = ['<?xml version="1.0" encoding="UTF-8"?>',
             '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for path, pri in urls:
        loc = BASE_URL + "/" if path == "" else f"{BASE_URL}/{path}"
        lines.append(f'  <url><loc>{loc}</loc><lastmod>{TODAY}</lastmod><changefreq>monthly</changefreq><priority>{pri}</priority></url>')
    lines.append('</urlset>')
    return "\n".join(lines) + "\n"

if __name__ == "__main__":
    urls = collect_urls()
    out = os.path.join(os.environ.get("REPO_DIR", "."), "sitemap.xml")
    with open(out, "w") as f:
        f.write(build_sitemap(urls))
    print(f"Generated sitemap.xml with {len(urls)} URLs")
