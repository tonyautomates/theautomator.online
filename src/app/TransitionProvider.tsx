"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { LayoutRouterContext } from
  "next/dist/shared/lib/app-router-context.shared-runtime";

function FrozenRouter({ children }: { children: React.ReactNode }) {
  const context = React.useContext(LayoutRouterContext);

  // Freeze once per mount (intentionally NOT updating on route change)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const frozen = React.useMemo(() => context, []);

  return (
    <LayoutRouterContext.Provider
      value={frozen as React.ContextType<typeof LayoutRouterContext>}
    >
      {children}
    </LayoutRouterContext.Provider>
  );
}

export default function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return <>{children}</>;

  return (
    /* ✅ persistent page canvas — NEVER animates */
    <div
      style={{
        backgroundColor: "#FAFAF7",
        minHeight: "100vh",
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {/* ✅ animated content ONLY */}
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          style={{ willChange: "transform, opacity" }}
        >
          <FrozenRouter>{children}</FrozenRouter>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
