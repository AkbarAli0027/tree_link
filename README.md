# tree_link

EVOS "Buyurtma bering" havolalar sahifasining klon-loyihasi (Vite + React).

## Ishga tushirish

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Fon naqshi (pc_nat / mobil_nat)

`public/patterns/pc_nat.svg` va `public/patterns/mobil_nat.svg` — nav qismidagi
barg/anor naqshining vaqtinchalik (yaqinlashtirilgan) varianti, chunki asl rasm
fayllari yuborilmagan edi. Asl fayllaringizni xuddi shu nomlar bilan
(`pc_nat` va `mobil_nat`) `public/patterns/` papkasiga qo'yib qo'ysangiz,
kod o'zgarishsiz ularni ishlatadi. PNG/JPG bilan almashtirmoqchi bo'lsangiz,
`src/App.css` faylidagi ikkita `background-image: url('/patterns/...')`
qatoridagi kengaytmani ham mos ravishda o'zgartiring (masalan `.png`).

## Shrift

Google Fonts orqali **Inter Tight** ulangan (`index.html`).
# tree_link
