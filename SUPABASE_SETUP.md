# Supabase setup

1. Create a Supabase project.
2. Open the Supabase SQL Editor and run `supabase-schema.sql`.
3. In `script.js`, replace:

```js
URL: 'https://YOUR-PROJECT-ID.supabase.co',
ANON_KEY: 'YOUR-SUPABASE-ANON-KEY'
```

with your project URL and public anon key from Project Settings > API.

The site reads active products from the `plans` table. Buy Now and WhatsApp clicks insert a row into the `orders` table, then open WhatsApp like before.

Keep Row Level Security enabled. The included policies allow public visitors to read active plans and create new order intents, but they cannot read existing orders.
