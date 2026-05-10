import React, { useState, useEffect } from "react";
import { Box, Button, Typography, Container, Paper, Stack } from "@mui/material";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

const FinalSafeApology = () => {
  const [isForgiven, setIsForgiven] = useState(false);
  const runawayControls = useAnimationControls();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = "unset"; };
  }, []);

  const handleRunaway = (e) => {
    e.stopPropagation();
    
    // STRICT BOUNDARY LOGIC
    // Isse button hamesha screen ke 80% area ke andar hi rahega
    const xLimit = window.innerWidth * 0.4; 
    const yLimit = window.innerHeight * 0.4;

    const targetX = (Math.random() - 0.5) * (xLimit * 2);
    const targetY = (Math.random() - 0.5) * (yLimit * 2);

    runawayControls.start({
      x: targetX,
      y: targetY,
      transition: { type: "spring", stiffness: 500, damping: 30 },
    });
  };

  return (
    <Box 
      onClick={() => isForgiven && setIsForgiven(false)}
      sx={{ 
        height: "100vh", width: "100vw", 
        background: "radial-gradient(circle at center, #1e051f 0%, #000000 100%)",
        display: "flex", alignItems: "center", justifyContent: "center",
        overflow: "hidden", position: "fixed"
      }}
    >
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -100, 0], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 5, repeat: Infinity }}
          style={{ position: "absolute", left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, fontSize: "1.5rem" }}
        > ❤️ </motion.div>
      ))}

      <Container maxWidth="xs" sx={{ zIndex: 10 }}>
        <AnimatePresence mode="wait">
          {!isForgiven ? (
            <motion.div key="card" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} onClick={(e) => e.stopPropagation()}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, sm: 5 }, borderRadius: "40px", textAlign: "center",
                  background: "rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                }}
              >
                <div style={{ fontSize: "4rem", marginBottom: "10px" }}>🥺</div>
                <Typography variant="h5" sx={{ fontWeight: 900, mb: 1, color: "#fff" }}>Gussa mat ho na Anshu!</Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.7)", mb: 4, fontSize: "0.9rem" }}>
                  Trust me, mere dil mein tumhare siwa koi nahi hai. <b>Baccha</b> sirf tumhara hai.
                </Typography>

                <Stack spacing={2} alignItems="center">
                  <Button
                    onClick={() => setIsForgiven(true)}
                    variant="contained"
                    sx={{ width: "280px", py: 1.8, borderRadius: "50px", background: "linear-gradient(45deg, #FF4B2B, #FF416C)" }}
                  >
                    Maaf Kar Diya ❤️
                  </Button>

                  <motion.div animate={runawayControls} onHoverStart={handleRunaway} onTouchStart={handleRunaway}>
                    <Button
                      variant="outlined"
                      sx={{ width: "280px", py: 1.8, borderRadius: "50px", color: "#fff", borderColor: "rgba(255,255,255,0.3)" }}
                    >
                      Nhi Maaf Krungi 😠
                    </Button>
                  </motion.div>
                </Stack>
              </Paper>
            </motion.div>
          ) : (
            <motion.div key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} onClick={(e) => e.stopPropagation()}>
              <Paper sx={{ p: 5, borderRadius: "40px", textAlign: "center", background: "#fff" }}>
                <div style={{ fontSize: "5rem" }}>🥰</div>
                <Typography variant="" sx={{ fontWeight: 900, color: "#FF416C" }}>I Love You!Coming with snacks & chocolates, Baccha! 🍫🍕</Typography>
                <Typography sx={{ color: "#666", mt: 2 }}>3:30 Station pe aaunga mai. Wait krunga! Mere sms pack over ho chuka hai aaj 3-4 hoga ar khud phone krlena mujhe pata nhi hoga kon hoga tumahre pass kon nhi !</Typography>
              </Paper>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </Box>
  );
};

export default FinalSafeApology;