# You Investment Management LLC — React Website

U.S. RIA website focused on **account management** and **investment advisory**, with strategies, founder profile, and ecosystem content under About.

## Navigation

| Route | Page |
|-------|------|
| `/` | 首页 — conversion-focused |
| `/accounts` | 账户管理 |
| `/strategies` | 策略与业绩 |
| `/founder` | 游飞宇 |
| `/about` | 关于我们（含财富学堂等） |
| `/contact` | 联系我们 |
| `/academy` | → redirects to `/about#wealth-academy` |

## Language

- Default: **中文**
- Header toggle: **中文 | EN**
- Copy in `src/i18n/translations.js`

## Strategy Data

Edit monthly in `src/data/strategies.js` (returns, drawdown, Sharpe, last updated).

## Commands

```bash
npm install
npm run dev    # http://localhost:5173
npm run build
```
