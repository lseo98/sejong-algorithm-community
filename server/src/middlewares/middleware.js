export function isLoggedIn(req, res, next) {
    if (req.session && req.session.user) {
      next(); 
    } else {
      res.status(401).json({ message: '로그인이 필요합니다.' });
    }
  }