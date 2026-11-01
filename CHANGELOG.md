# Changelog

All notable changes to Photo Pairs, newest first. The version number is also shown in the app header.

## 1.3.0 - 2026-11-01
- The Library now syncs across your devices. Press "Sign in to sync" in the Library tab and sign in with Google (same allowed list as the Control Room, so only you). Changes made on one device appear on the others within about 30 seconds, or straight away when you open the app.
- Safe merging: rows are merged by their own id, so editing different albums on two devices never overwrites either. Deleted rows stay deleted.
- Works offline: the list is always saved on the device first and syncs when the connection is back.

## 1.2.0 - 2026-11-01
- New "Library" tab to keep track of your photo albums: one row per album with a name, a year and a column for each place it is kept (Review, Stampa, Computer, HD1, HD2, GP, MicroSD).
- Add as many rows as you like, filter by year (with a count for each year), search by name, tap a cell to cycle empty / ✓ / –, double-click or long-press to type your own text (for example a name).
- Columns can be added or removed. Paste rows from a spreadsheet with Import, and Export CSV for a backup.
- The list is saved on the device you use (browser storage), not in the repository, so it stays private.

## 1.1.0 - 2026-11-01
- New "Best" mark (gold star on each photo, or B in the full-screen view). "Copy best" copies the JPEG and RAW of every Best photo into a "_best" folder inside the folder you opened, and leaves the originals where they are. Photos already copied show a green tick, so they are not copied twice. Optional: copy the XMP/PP3/DOP sidecars too.
- A photo is either marked for deletion or Best, never both.

## 1.0.0 - 2026-11-01
- First release. Open a folder and the app matches each JPEG with its RAW file (same name, any RAW format: CR2, CR3, NEF, ARW, RAF, ORF, RW2, DNG and more).
- Browse as a thumbnail grid, filter by Pairs / JPEG only / RAW only, and open any photo full screen. Arrow keys move, Space or D marks a photo for deletion.
- Marking a photo marks both files; "Delete" removes the JPEG and the RAW together. Optional: also remove XMP/PP3/DOP sidecar files.
- Safe by default: deleted files are moved into a "_deleted" folder next to them. Untick the option to delete permanently.
- Works on desktop Chrome, Edge and other Chromium browsers (the only ones that allow editing a folder). Installable, works offline, nothing is uploaded.
