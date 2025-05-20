A tiny (\~18KB) JavaScript utility to get country information from a given timezone. Most existing timezone packages are bulky — I needed something lightweight and focused for my office work. This package gives you exactly what you need, and nothing more.

---

### 📦 Installation

```bash
npm install @abuhasanrumi/timezone-to-country
```

---

### 🔍 Usage

```js
import getTimezoneInfo from '@abuhasanrumi/timezone-to-country'

const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
const info = getTimezoneInfo(timezone)

console.log(info)
```

---

### 🧠 Why I Built This

While working on an internal project at my office, I needed to map a given timezone to its corresponding country info. Every library I found was oversized for this small task — many were 70KB+ or came with unused data. So, I built this micro-library with minimal JSON and no dependencies, optimized for performance and size.

---

### ✅ Features

- 🌍 Maps IANA timezones to country details
- 🪶 Tiny footprint (\~18KB)
- 📦 Zero dependencies
- 📁 Pure JSON + single function
- ⚡️ Fast lookup (O(1) via object key)

---

### 🗂 Data Format

Each timezone entry maps to:

```js
{
  countryCode: 'XX',         // ISO country code
  countryName: 'Country Name',
  continentName: 'Continent'
}
```

---

### 🛠 Development

```bash
git clone https://github.com/abuhasanrumi/timezone-to-country.git
cd timezone-to-country
npm install
npm run build
```

---

### 🤝 Contributing

Feel free to submit issues or PRs!

1. Fork the repo
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request

---

### 📄 License

MIT © [Abu Hasan Rumi](https://github.com/abuhasanrumi)

---

### 🔗 Related Packages

- [`@abuhasanrumi/state-sync`](https://npmjs.com/package/@abuhasanrumi/state-sync): A tiny utility (\~1KB) to sync state across tabs using `BroadcastChannel` and `localStorage`.
- [`@abuhasanrumi/micro-flow`](https://npmjs.com/package/@abuhasanrumi/micro-flow): Tiny debounce, throttle, and rate-limiting (\~364B).
