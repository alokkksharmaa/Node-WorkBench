import router from 'router';
router.get("/", (req, res) => {
  res.send("User home");
});

router.get("/profile", (req, res) => {
  res.send("User profile");
});

router.get("/profile/settings/security", (req, res) => {
  res.send("User security settings");
});

export default router;

