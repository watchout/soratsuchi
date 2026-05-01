# そらつち農場 公式サイト

埼玉県小川町で営農する「そらつち農場」の公式HPプロジェクトです。

## 技術構成

- Astro
- TypeScript
- Markdown content collections
- Cloudflare Pages
- Googleフォーム連携

## Cloudflare Pages 設定

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`

## ローカル開発

```bash
npm install
npm run dev
```

## イベント追加方法

`src/content/events/` に Markdown ファイルを追加します。

```md
---
title: "田植え体験会 2026"
description: "小川町の田んぼで、親子でも参加できる田植え体験会です。"
date: "2026-06-01"
location: "埼玉県比企郡小川町下里"
status: "募集中"
formUrl: "https://forms.gle/xxxx"
---

本文を書きます。
```

## 画像について

現時点では権利確認済み写真がないため、サイト内はSVGプレースホルダーを使用しています。公開前に、農場側で使用許諾のある写真へ差し替えてください。
