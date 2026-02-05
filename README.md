# React Sponsor Banner

A versatile and customizable React Sponsor Banner component built with Material-UI, featuring grid and marquee layouts, tier-based organization, and flexible styling options.

## ✨ Features

- **Multiple Layout Options**: Choose between Grid and Marquee layouts to display sponsors
- **Material-UI Integration**: Seamlessly integrates with your Material-UI themed applications
- **Tier Tabs & Labels**: Optional tier-based filtering with tabs (grid) or visual labels (marquee)
- **Marquee Animation**: Smooth scrolling marquee with configurable speed and direction
- **Clickable Sponsors**: Each sponsor logo can link to external URLs
- **Sponsor Names Display**: Optional sponsor name labels below logos
- **Customizable Styling**: Control colors, spacing, fonts, borders, and more
- **Responsive Grid**: Automatically adapts to different screen sizes with customizable columns
- **Lightweight**: Minimal dependencies with optimized performance

## 🚀 Installation

First, install the package in your React project:

```bash
npm install react-sponsor-banner
```

or

```bash
yarn add react-sponsor-banner
```

This component relies on `react`, `react-dom`, `@mui/material`, and `@emotion/styled` as peer dependencies. Ensure these are also installed in your project:

```bash
npm install react react-dom @mui/material @emotion/styled
```

or

```bash
yarn add react react-dom @mui/material @emotion/styled
```

## 💡 Usage

### Grid Layout Example

```jsx
import React from 'react';
import SponsorBanner from 'react-sponsor-banner';

const sponsors = [
  { src: "/logos/adobe.png", url: "https://www.adobe.com/", alt: "Adobe", tier: "platinum" },
  { src: "/logos/microsoft.png", url: "https://www.microsoft.com/", alt: "Microsoft", tier: "platinum" },
  { src: "/logos/google.png", url: "https://www.google.com/", alt: "Google", tier: "gold" },
  { src: "/logos/amazon.png", url: "https://www.amazon.com/", alt: "Amazon", tier: "gold" },
  { src: "/logos/intel.png", url: "https://www.intel.com/", alt: "Intel", tier: "silver" },
];

function App() {
  return (
    <SponsorBanner
      sponsors={sponsors}
      layout="grid"
      columns={5}
      sortByTier={true}
      tierOrder={["platinum", "gold", "silver", "bronze"]}
      showTierTabs={false}
      showSponsorNames={true}
      backgroundColor="#f7f7f7"
      gap={24}
      borderRadius={12}
      padding={12}
      maxHeight="100px"
      responsive={true}
    />
  );
}

export default App;
```

### Marquee Layout Example

```jsx
import React from 'react';
import SponsorBanner from 'react-sponsor-banner';

const sponsors = [
  { src: "/logos/adobe.png", url: "https://www.adobe.com/", alt: "Adobe", tier: "platinum" },
  { src: "/logos/microsoft.png", url: "https://www.microsoft.com/", alt: "Microsoft", tier: "platinum" },
  { src: "/logos/google.png", url: "https://www.google.com/", alt: "Google", tier: "gold" },
  { src: "/logos/amazon.png", url: "https://www.amazon.com/", alt: "Amazon", tier: "gold" },
];

function App() {
  return (
    <SponsorBanner
      sponsors={sponsors}
      layout="marquee"
      speed={50}
      direction="left"
      showTierLabels={true}
      showSponsorNames={true}
      separator="|"
      backgroundColor="#fafafa"
      gap={80}
      maxHeight="100px"
    />
  );
}

export default App;
```

## ⚙️ Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `sponsors` | `Array<{src: string, url?: string, alt?: string, tier?: string}>` | **Required** | Array of sponsor objects. Each sponsor should have `src` (image URL), optional `url` (click destination), `alt` (image alt text), and `tier` (sponsor tier). |
| `layout` | `"grid" \| "marquee"` | **Required** | Layout mode - either grid or marquee. |
| `className` | `string` | `""` | Additional CSS class for the container. |
| `style` | `object` | `{}` | Additional inline styles for the container. |
| `maxHeight` | `string \| number` | `undefined` | Maximum height for sponsor logos. |
| `gap` | `number \| string` | `16` | Gap between sponsor items (in px or any CSS unit). |
| `borderRadius` | `number` | `12` | Border radius of the container (in px). |
| `padding` | `number` | `12` | Padding inside the container (in px). |
| `backgroundColor` | `string` | `"transparent"` | Background color of the container. |
| `fontFamily` | `string` | `undefined` | Font family for sponsor names and tier labels. |
| `fontSize` | `string` | `"0.875rem"` | Font size for sponsor names and tier labels. |
| `sortByTier` | `boolean` | `false` | Whether to sort sponsors by tier. |
| `tierOrder` | `Array<string>` | `[]` | Order of tiers (e.g., `["platinum", "gold", "silver"]`). |
| `showSponsorNames` | `boolean` | `false` | Whether to display sponsor names below logos. |

### Grid-Specific Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `number` | `undefined` | Number of columns in grid layout. |
| `responsive` | `boolean` | `true` | Whether grid should be responsive (uses minmax). |
| `showTierTabs` | `boolean` | `false` | Show Material-UI tabs to filter sponsors by tier. |

### Marquee-Specific Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `speed` | `number` | `60` | Speed of marquee animation (higher = faster). |
| `direction` | `"left" \| "right"` | `"left"` | Direction of marquee scrolling. |
| `showTierLabels` | `boolean` | `false` | Show tier labels in the marquee. |
| `separator` | `string` | `"\|"` | Separator character between tier groups. |

## 📋 Sponsor Object Structure

Each sponsor in the `sponsors` array should follow this structure:

```typescript
{
  src: string;        // Required: Image URL or path
  url?: string;       // Optional: Click destination URL (opens in new tab)
  alt?: string;       // Optional: Alt text for image (also used as sponsor name)
  tier?: string;      // Optional: Sponsor tier (e.g., "platinum", "gold", "silver")
}
```

## 🎨 Styling

The component comes with default styles but is highly customizable:

### CSS Classes

- `.rsb-container` - Main container
- `.rsb-grid` - Grid layout container
- `.rsb-marquee` - Marquee layout container
- `.rsb-link` - Clickable sponsor item
- `.rsb-tier-label` - Tier label in marquee
- `.rsb-tier-separator` - Separator in marquee

### Custom Styling Example

```jsx
<SponsorBanner
  sponsors={sponsors}
  layout="grid"
  className="my-custom-banner"
  style={{
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    border: "1px solid #e0e0e0"
  }}
  backgroundColor="#ffffff"
  gap={32}
  borderRadius={16}
  padding={24}
/>
```

## 🛠️ Development

To set up the development environment:

1. Clone the repository:
```bash
git clone https://github.com/adityasrk/react-sponsor-banner.git
cd react-sponsor-banner
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Build for production:
```bash
npm run build
# or
yarn build
```

## 📝 Examples

### Grid with Tier Tabs

```jsx
<SponsorBanner
  sponsors={sponsors}
  layout="grid"
  columns={4}
  sortByTier={true}
  tierOrder={["platinum", "gold", "silver", "bronze"]}
  showTierTabs={true}
  showSponsorNames={true}
  responsive={true}
/>
```

### Marquee with Tier Labels

```jsx
<SponsorBanner
  sponsors={sponsors}
  layout="marquee"
  speed={40}
  direction="left"
  showTierLabels={true}
  separator="●"
  gap={100}
/>
```

### Minimal Grid

```jsx
<SponsorBanner
  sponsors={sponsors}
  layout="grid"
  columns={6}
  gap={16}
  maxHeight="80px"
/>
```

## 🤝 Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [React](https://react.dev/)
- Styled with [Material-UI](https://mui.com/)
- Developed with [Vite](https://vitejs.dev/)

## 📦 Keywords

- react
- sponsor-banner
- sponsor-grid
- marquee
- grid-layout
- branding
- marketing
- sponsors
- tier-based
- material-ui
- mui
- vite
- component
