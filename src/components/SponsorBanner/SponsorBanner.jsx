
import React, { useMemo } from "react";
import SponsorGrid from "./SponsorGrid";
import SponsorMarquee from "./SponsorMarquee";
import { sortSponsorsByTier } from "../../utils/tierSort";
import "./styles.css";

export default function SponsorBanner({
  sponsors,
  layout,
  className,
  style,
  maxHeight,
  gap = 16,
  borderRadius = 12,
  padding = 12,
  
  backgroundColor = "transparent",
  fontFamily,
  fontSize,
  columns,
  responsive = true,

  speed = 60,
  direction = "left",

  sortByTier = false,
  tierOrder,
  showTierLabels = false,
  showTierTabs = false,
  separator = "|",
  showSponsorNames = false,
}) {
  const data = useMemo(
    () => (sortByTier ? sortSponsorsByTier(sponsors, tierOrder) : sponsors),
    [sortByTier, sponsors, tierOrder]
  );

  const containerStyle = {
    backgroundColor,
    borderRadius,
    padding,
    "--rsb-gap": typeof gap === "number" ? `${gap}px` : gap,
  };

  return (
    <>
      <hr />
      <section
        className={`rsb-container ${className ?? ""}`}
        style={{ ...containerStyle, ...style }}
      >
        <div className="rsb-inner" role="region" aria-label="Sponsors">
          {layout === "grid" && (
            <SponsorGrid
              sponsors={data}
              columns={columns}
              fontFamily={fontFamily}
              fontSize={fontSize}
              gap={gap}
              maxHeight={maxHeight}
              responsive={responsive}
              tierOrder={tierOrder}
              showTierTabs={showTierTabs}
              showSponsorNames={showSponsorNames}
            />
          )}

          {layout === "marquee" && (
            <SponsorMarquee
              sponsors={data}
              speed={speed}
              direction={direction}
              gap={gap}
              maxHeight={maxHeight}
              separator={separator}
              showTierLabels={showTierLabels}
              showSponsorNames={showSponsorNames}
              fontFamily={fontFamily}
              fontSize={fontSize}
            />
          )}
        </div>
      </section>
      <hr />
    </>
  );
}
