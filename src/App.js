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
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.position = "unset";
    };
  }, []);

  const handleRunaway = (e) => {
    // Prevents the background click from triggering when trying to click this button
    e.stopPropagation(); 
    
    const btnWidth = 280;
    const btnHeight = 60;
    const padding = 100; 
    
    const maxWidth = window.innerWidth - btnWidth - padding;
    const maxHeight = window.innerHeight - btnHeight - padding;

    const randomX = Math.random() * maxWidth - (window.innerWidth / 2) + (btnWidth / 2) + (padding / 2);
    const randomY = Math.random() * maxHeight - (window.innerHeight / 2) + (btnHeight / 2) + (padding / 2);

    runawayControls.start({
      x: randomX,
      y: randomY,
      transition: { type: "spring", stiffness: 400, damping: 25 },
    });
  };

  // Function to close success screen when clicking outside
  const handleBackgroundClick = () => {
    if (isForgiven) {
      setIsForgiven(false);
    }
  };

  return (
    <Box 
      onClick={handleBackgroundClick} // Handle click outside
      sx={{ 
        height: "100vh", width: "100vw", 
        background: "radial-gradient(circle at center, #1e051f 0%, #000000 100%)",
        display: "flex", alignItems: "center", justifyContent: "center",
        overflow: "hidden", position: "fixed", top: 0, left: 0,
        cursor: isForgiven ? 'pointer' : 'default'
      }}
    >
      
      {/* Background Hearts */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -100, 0], opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: Math.random() * 4 + 4, repeat: Infinity }}
          style={{
            position: "absolute", left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`, fontSize: "1.5rem", pointerEvents: "none"
          }}
        > ❤️ </motion.div>
      ))}

      <Container maxWidth="xs" sx={{ zIndex: 10 }}>
        <AnimatePresence mode="wait">
          {!isForgiven ? (
            <motion.div 
              key="card" 
              initial={{ scale: 0.9, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside card
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, sm: 5 }, borderRadius: "40px", textAlign: "center",
                  background: "rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(25px)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
                }}
              >
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }} style={{ fontSize: "4.5rem", marginBottom: "15px" }}>
                  🥺
                </motion.div>
                
                <Typography variant="h4" sx={{ fontWeight: 900, mb: 1.5, color: "#fff", fontSize: { xs: "1.8rem", sm: "2.125rem" } }}>
                  Gussa mat ho na!
                </Typography>

                <Typography sx={{ color: "rgba(255,255,255,0.7)", mb: 5, fontSize: "0.95rem", fontWeight: 500, lineHeight: 1.6 }}>
                  Trust me, <b>Anshu</b>—mere dil mein tumhare siwa aur koi nahi hai. 
                  Main sirf tumhara hoon. Please maan jao na? ❤️
                </Typography>

                <Stack spacing={2.5} alignItems="center" sx={{ width: "100%" }}>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsForgiven(true);
                    }}
                    variant="contained"
                    fullWidth
                    startIcon={<FavoriteIcon />}
                    sx={{
                      maxWidth: "280px", py: 2, borderRadius: "50px", 
                      fontWeight: "bold", fontSize: "1.1rem", textTransform: "none",
                      background: "linear-gradient(45deg, #FF4B2B, #FF416C)",
                      boxShadow: "0 10px 25px rgba(255, 75, 43, 0.4)",
                    }}
                  >
                    Maaf Kar Diya ❤️
                  </Button>

                  <motion.div 
                    animate={runawayControls} 
                    onHoverStart={handleRunaway} 
                    onTouchStart={handleRunaway}
                    style={{ width: '100%', display: 'flex', justifyContent: 'center', touchAction: 'none' }}
                  >
                    <Button
                      variant="outlined"
                      startIcon={<ThumbDownIcon />}
                      sx={{
                        width: "280px", py: 2, borderRadius: "50px", 
                        fontWeight: "bold", fontSize: "1.1rem", textTransform: "none",
                        color: "rgba(255,255,255,0.8)", borderColor: "rgba(255,255,255,0.2)",
                        background: "rgba(255, 255, 255, 0.05)",
                      }}
                    >
                      Nhi Maaf Krungi 😠
                    </Button>
                  </motion.div>
                </Stack>
              </Paper>
            </motion.div>
          ) : (
            <motion.div 
              key="success" 
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: 1, scale: 1 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside success card
            >
              <Paper sx={{ p: 5, borderRadius: "40px", textAlign: "center", background: "#fff" }}>
                <div style={{ fontSize: "5rem" }}>🥰</div>
                <Typography variant="h4" sx={{ fontWeight: 900, mt: 2, color: "#FF416C" }}>
                  I Love You!
                </Typography>
                <Typography sx={{ color: "#666", mt: 2, fontSize: "0.95rem", lineHeight: 1.6 }}>
                  Coming with snacks & chocolates, <b>Mera Baccha!</b> 🍫🍕 <br/><br/>
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