// 외부 API 호출하는 로직을 테스트 하기위한 파일로 실제 서비스에는 사용되지 않음.
import { Router } from 'express';
import { getSolvedProblemIdsCtrl, getRankCtrl } from '../controllers/solvedacApiController.js';
const router = Router();

router.get('/', (req, res) => {
  res.send('Solvedac route');
});

//백준 닉네임에 해당하는 유저의 문제 해결 목록 json 반환
router.get('/api/solved/:handle',getSolvedProblemIdsCtrl); // handle에 백준 닉네임

//백준 닉네임에 해당하는 유저의 랭킹 json 반환
router.get('/api/rank/:handle', getRankCtrl); // handle에 백준 닉네임
export default router;
