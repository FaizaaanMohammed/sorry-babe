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

  const handleRunaway = () => {
    // Precise random jumps that stay within the viewport bounds
    const randomX = (Math.random() - 0.5) * (window.innerWidth * 0.7);
    const randomY = (Math.random() - 0.5) * (window.innerHeight * 0.7);

    runawayControls.start({
      x: randomX,
      y: randomY,
      transition: { type: "spring", stiffness: 400, damping: 20 },
    });
  };

  return (
    <Box sx={{ 
      height: "100vh", width: "100vw", 
      background: "radial-gradient(circle at center, #1e051f 0%, #000000 100%)",
      display: "flex", alignItems: "center", justifyContent: "center",
      overflow: "hidden", position: "relative" 
    }}>
      
      {/* Background Hearts */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -100, 0], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 5, repeat: Infinity }}
          style={{ position: "absolute", left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, fontSize: "1.5rem" }}
        > ❤️ </motion.div>
      ))}

      <Container maxWidth="xs" sx={{ zIndex: 10, display: 'flex', justifyContent: 'center' }}>
        <AnimatePresence mode="wait">
          {!isForgiven ? (
            <motion.div key="card" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} style={{ width: '100%' }}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, sm: 5 }, borderRadius: "40px", textAlign: "center",
                  background: "rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
                }}
              >
                <div style={{ fontSize: "4rem", marginBottom: "10px" }}>🥺</div>
                
                <Typography variant="h5" sx={{ fontWeight: 900, mb: 1, color: "#fff" }}>
                  Gussa mat ho na Anshu!
                </Typography>

                <Typography sx={{ color: "rgba(255,255,255,0.7)", mb: 5, fontSize: "0.95rem", lineHeight: 1.6 }}>
                  Trust me, mere dil mein tumhare siwa aur koi nahi hai. 
                  <b> Baccha</b> sirf tumhara hai hamesha. Please maaf kar do? ❤️
                </Typography>

                {/* --- FIXED ALIGNMENT STACK --- */}
                <Stack spacing={2.5} alignItems="center" sx={{ width: "100%" }}>
                  
                  {/* REAL BUTTON */}
                  <Button
                    onClick={() => setIsForgiven(true)}
                    variant="contained"
                    fullWidth
                    startIcon={<FavoriteIcon />}
                    sx={{
                      maxWidth: "280px", py: 2, borderRadius: "50px", fontWeight: "bold",
                      fontSize: "1rem", textTransform: "uppercase", letterSpacing: '1px',
                      background: "linear-gradient(45deg, #FF4B2B, #FF416C)",
                    }}
                  >
                    Maaf Kar Diya
                  </Button>

                  {/* PRANK BUTTON - Wrapper set to center-align perfectly */}
                  <motion.div 
                    animate={runawayControls} 
                    onHoverStart={handleRunaway} 
                    onTouchStart={handleRunaway}
                    style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                  >
                    <Button
                      variant="outlined"
                      startIcon={<ThumbDownIcon />}
                      sx={{
                        width: "280px", py: 2, borderRadius: "50px", fontWeight: "bold",
                        fontSize: "1rem", textTransform: "uppercase", letterSpacing: '1px',
                        color: "rgba(255,255,255,0.6)", borderColor: "rgba(255,255,255,0.3)",
                        background: "rgba(255,255,255,0.05)", backdropFilter: "blur(5px)",
                        // Removing default margins that might cause misalignment
                        margin: '0 auto' 
                      }}
                    >
                      Nhi Maaf Krungi
                    </Button>
                  </motion.div>
                </Stack>
              </Paper>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
              <Paper sx={{ p: 5, borderRadius: "40px", textAlign: "center", background: "#fff" }}>
                <div style={{ fontSize: "5rem" }}>🥰</div>
                <Typography variant="h4" sx={{ fontWeight: "bold", color: "#FF416C", mt: 2 }}>
                  I Love You!
                </Typography>
                <Typography sx={{ color: "#666", mt: 2, fontSize: "1rem" }}>
                  Coming with snacks & chocolates, <b>Baccha!</b> 🍫🍕 <br/><br/>
                  3:30 Station pe aaunga mai. Wait krunga! Mere sms pack over ho chuka hai aaj 3-4 hoga ar khud phone krlena mujhe pata nhi hoga kon hoga tumahre pass kon nhi ! 
                </Typography>
              </Paper>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </Box>
  );
};

export default FinalSafeApology;