
import React, { useMemo } from "react";


export default function SponsorMarquee({
  sponsors,
  speed = 60,
  direction = "left",
  gap,
  maxHeight,
  className,
  showTierLabels = false,
  separator = "|",
  showSponsorNames = false,
  fontFamily,
  fontSize = '0.875rem',
}) {
  
  // Group sponsors by tier
  const groupedByTier = useMemo(() => {
    const tierMap = new Map();
    sponsors.forEach((sponsor) => {
      const tier = sponsor.tier || "Other";
      if (!tierMap.has(tier)) {
        tierMap.set(tier, []);
      }
      tierMap.get(tier).push(sponsor);
    });
    return tierMap;
  }, [sponsors]);

  // Create display items with tier headers
  const displayItems = useMemo(() => {
    const items = [];
    groupedByTier.forEach((tierSponsors, tierName) => {
      // Add tier header
      items.push({ type: "tier", name: tierName });
      // Add sponsors for this tier
      tierSponsors.forEach((sponsor) => {
        items.push({ type: "sponsor", data: sponsor });
      });
      // Add separator
      items.push({ type: "separator" });
    });
    return items;
  }, [groupedByTier]);

  // Duplicate list for seamless looping
  const looped = useMemo(() => [...displayItems, ...displayItems], [displayItems]);

  // Approximate total width speed -> duration (fallback 30s)
  const duration = Math.max(10, Math.min(60, Math.round(2000 / Math.max(20, speed)))); // seconds

  const trackStyle = {
    gap,
    animation: `rsb-marquee-${direction} ${duration}s linear infinite`,
  };

  return (
    <div className={`rsb-marquee ${className ?? ""}`} style={{ maxHeight }}>
      <style>
        {`
          @keyframes rsb-marquee-left {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
          @keyframes rsb-marquee-right {
            from { transform: translateX(-50%); }
            to   { transform: translateX(0%); }
          }
        `}
      </style>
      <div
        className="rsb-marquee-track"
        style={trackStyle}
        data-pause-on-hover="true"
        aria-label="Sponsors marquee"
      >
        {looped.map((item, i) => {
          if (item.type === "tier" && showTierLabels) {
            return (
              <div key={i} className="rsb-tier-label" style={{ display: "flex", alignItems: "center", whiteSpace: "nowrap" }}>
                <strong>{item.name.toUpperCase()}</strong>
              </div>
            );
          }
          if (item.type === "tier" && !showTierLabels) {
            return null;
          }
          if (item.type === "separator" && showTierLabels) {
            return (
              <div key={i} className="rsb-tier-separator" style={{ display: "flex", alignItems: "center", fontSize: "1.2em" }}>
                <span>{separator}</span>
              </div>
            );
          }
          if (item.type === "separator" && !showTierLabels) {
            return null;
          }
          // type === "sponsor"
          const s = item.data;
          
          const handleClick = () => {
            if (s.url) {
              window.open(s.url, '_blank', 'noopener,noreferrer');
            }
          };
          
          const imgEl = (
            <img
              src={s.src}
              alt={s.alt ?? ""}
              loading="lazy"
              style={{ maxHeight, display: "block", cursor: s.url ? 'pointer' : 'default' }}
              onClick={handleClick}
            />
          );
          return (
            <div key={i} className={s.url ? "rsb-link" : ""} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              {imgEl}
              {showSponsorNames && s.alt && (
                <span style={{ fontSize: fontSize, fontFamily: fontFamily, color: '#666', textAlign: 'center', whiteSpace: 'nowrap' }}>
                  {s.alt}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
