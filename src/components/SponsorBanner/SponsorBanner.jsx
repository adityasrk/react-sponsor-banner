
import React, { useMemo } from "react";
import SponsorGrid from "./SponsorGrid";
import SponsorMarquee from "./SponsorMarquee";
import { sortSponsorsByTier } from "../../utils/tierSort";
import "./styles.css";

export default function SponsorBanner({
  backgroundColor = "transparent",
  borderRadius = 12,
  className,
  columns,
  direction = "left",
  fontFamily,
  fontSize,
  gap = 16,
  layout,
  maxHeight,
  padding = 12,
  responsive = true,
  separator = "|",
  showTierLabels = false,
  showTierTabs = false,
  showSponsorNames = false,
  sortByTier = false,
  speed = 60,
  sponsors,
  style,
  tierOrder,
}) {
  const data = useMemo(
    () => (sortByTier ? sortSponsorsByTier(sponsors, tierOrder) : sponsors),
    [sortByTier, sponsors, tierOrder]
  );

  const containerStyle = {
    fontFamily,
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
              columns={columns}
              fontSize={fontSize}
              gap={gap}
              maxHeight={maxHeight}
              responsive={responsive}
              showSponsorNames={showSponsorNames}
              showTierTabs={showTierTabs}
              sponsors={data}
              tierOrder={tierOrder}
            />
          )}

          {layout === "marquee" && (
            <SponsorMarquee
              direction={direction}
              fontSize={fontSize}
              gap={gap}
              maxHeight={maxHeight}
              separator={separator}
              speed={speed}
              showSponsorNames={showSponsorNames}
              showTierLabels={showTierLabels}
              sponsors={data}
            />
          )}
        </div>
      </section>
      <hr />
    </>
  );
}
