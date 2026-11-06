# Nakamula Furnitures – Website Guide

Static catalogue site (design based on the supplied Dominic Furnitures layout, rebuilt as a WhatsApp catalogue). Free forever: GitHub Pages (hosting) + Cloudinary free tier (photos). No database.

## A. One-time setup (developer/you, ~20 min)
1. **GitHub**: create a free account, then a **public** repo named `nakamula-furnitures`. Upload all files from this folder (keep `admin/` folder and `.nojekyll`).
2. **Cloudinary** (cloudinary.com, free): copy your **Cloud name**. Go to Settings > Upload > *Add upload preset*: name `nakamula_unsigned`, Signing mode **Unsigned**, Save.
3. Edit `config.js`: set `cloud`, and `repo` (`username/nakamula-furnitures`). Commit.
4. **GitHub Pages**: repo Settings > Pages > Source: *Deploy from branch* > `main` / `(root)` > Save. Site goes live at `https://USERNAME.github.io/nakamula-furnitures/`.
5. **Admin password**: open `/admin/`, type the password you want, press Enter. A box shows a long code: copy it into `lockHash` in `config.js` and commit.
6. **Owner token**: GitHub > Settings > Developer settings > Fine-grained tokens > Generate. Repository access: only `nakamula-furnitures`; Permissions: *Contents = Read and write*; set expiry to 1 year. Copy the token. This token is the real lock: only its holder can change the site.
7. Replace `YOUR_GITHUB_USERNAME` in `index.html`, `robots.txt`, `sitemap.xml` with your username (or your custom domain).

## B. Owner: adding products (no code)
1. Open `yoursite/admin/`, enter the password. First time on a device, paste the token.
2. Tap the file box, select 10–20 photos, wait for the progress bar. Photos are resized automatically.
3. Give each product a name, category, optional price, and tick *Featured* for homepage items.
4. Press **Publish to website**. It appears in about a minute.
- Edit/replace: change fields or use *Add / replace photos*, then Publish.
- Unavailable item: tick *Hide*. Remove: *Delete*.

## C. SEO (do these once)
- Google Search Console: add your site, submit `sitemap.xml`.
- Create/claim a **Google Business Profile** for Nakamula Furnitures (biggest boost for "furniture Githurai"). Add the site link, phone and photos.
- Add descriptive product names ("3-Seater Grey Sofa"), and descriptions.
- Share the link in WhatsApp status; ask happy customers for Google reviews.
- Optional: buy a custom domain (e.g. nakamulafurnitures.co.ke) and add it under Pages > Custom domain, then update the URLs in step 7. GitHub's free subdomain works without buying anything.

## D. Notes
- Admin lock is a front-door password; the GitHub token is the true security. Never share the token.
- Removing a photo unlinks it from the site; it stays in Cloudinary (free tier has ample space).
