

export function sortSponsorsByTier(
  sponsors,
  tierOrder
) {
  const rank = new Map(tierOrder.map((t, i) => [t.toLowerCase(), i]));
  return [...sponsors].sort((a, b) => {
    const ra = a.tier ? rank.get(a.tier.toLowerCase()) ?? tierOrder.length : tierOrder.length;
    const rb = b.tier ? rank.get(b.tier.toLowerCase()) ?? tierOrder.length : tierOrder.length;
    if (ra !== rb) return ra - rb;
    // Within same tier, keep stable order
    return 0;
  });
}
