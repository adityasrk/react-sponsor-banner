
import React, { useState, useMemo } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function SponsorGrid({
  className,
  columns,
  fontSize = '0.875rem',
  gap,
  maxHeight,
  onLogoClick,
  responsive = true,
  sponsors,
  showSponsorNames = false,
  showTierTabs,
  tierOrder = [],
}) {
  const [selectedTab, setSelectedTab] = useState(0);

  // Group sponsors by tier
  const sponsorsByTier = useMemo(() => {
    const grouped = {};
    
    sponsors?.forEach((sponsor) => {
      const tier = sponsor.tier || "other";
      if (!grouped[tier]) {
        grouped[tier] = [];
      }
      grouped[tier].push(sponsor);
    });

    return grouped;
  }, [sponsors]);

  // Get ordered tier list
  const orderedTiers = useMemo(() => {
    const allTiers = Object.keys(sponsorsByTier);
    
    // If tierOrder is provided, use it to sort tiers
    if (tierOrder && tierOrder.length > 0) {
      const ordered = tierOrder.filter((tier) => allTiers.includes(tier));
      const remaining = allTiers.filter((tier) => !tierOrder.includes(tier));
      return [...ordered, ...remaining];
    }
    
    return allTiers;
  }, [sponsorsByTier, tierOrder]);

  // Get sponsors to display - either filtered by tab or all sponsors
  const displaySponsors = useMemo(() => {
    if (showTierTabs && orderedTiers.length > 1) {
      const currentTier = orderedTiers[selectedTab];
      return sponsorsByTier[currentTier] || [];
    }
    return sponsors;
  }, [showTierTabs, selectedTab, orderedTiers, sponsorsByTier, sponsors]);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  const gridStyle = {
    gridTemplateColumns: responsive
      ? `repeat(${columns}, minmax(0, 1fr))`
      : `repeat(${columns}, 1fr)`,
    gap,
    maxHeight,
  };

  const item = (s, i) => {
    const handleClick = () => {
      if (s.url) {
        window.open(s.url, '_blank', 'noopener,noreferrer');
      }
      onLogoClick?.(s, i);
    };

    const imgEl = (
      <img
        src={s.src}
        alt={s.alt ?? ""}
        loading="lazy"
        style={{ maxHeight, cursor: s.url ? 'pointer' : 'default' }}
        onClick={handleClick}
      />
    );

    return (
      <div key={i} className={s.url ? "rsb-link" : ""} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        {imgEl}
        {showSponsorNames && s.alt && (
          <span style={{ fontSize: fontSize, color: '#666', textAlign: 'center', whiteSpace: 'nowrap' }}>
            {s.alt}
          </span>
        )}
      </div>
    );
  };

  // Show tabs only if showTierTabs is true and there are multiple tiers
  const shouldShowTabs = showTierTabs && orderedTiers.length > 1;

  return (
    <div className={className ?? ""}>
      {shouldShowTabs && (
        <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            aria-label="sponsor tiers"
            variant="fullWidth"
          >
            {orderedTiers.map((tier, index) => (
              <Tab
                key={tier}
                label={tier.charAt(0).toUpperCase() + tier.slice(1)}
                id={`sponsor-tab-${index}`}
                aria-controls={`sponsor-tabpanel-${index}`}
              />
            ))}
          </Tabs>
        </Box>
      )}
      
      <div className="rsb-grid" style={gridStyle}>
        {displaySponsors?.map(item)}
      </div>
    </div>
  );
}
