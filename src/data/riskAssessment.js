import { RISK_MATCH_GUIDE } from './strategies'

export const ASSESSMENT_VERSION = 'V1.0'

export function getQuestions(locale) {
  const zh = locale === 'zh'
  return [
    {
      id: 'horizon',
      profileKey: 'horizon',
      text: zh ? '您的预期投资期限是？' : 'Your expected investment horizon?',
      options: zh
        ? [
            { label: '1 年以内', score: 1 },
            { label: '1–3 年', score: 2 },
            { label: '3–7 年', score: 3 },
            { label: '7 年以上', score: 4 },
          ]
        : [
            { label: 'Under 1 year', score: 1 },
            { label: '1–3 years', score: 2 },
            { label: '3–7 years', score: 3 },
            { label: '7+ years', score: 4 },
          ],
    },
    {
      id: 'drawdown',
      profileKey: 'volatility',
      text: zh ? '若账户市值暂时下跌 15%，您最可能？' : 'If your account drops 15% temporarily, you would most likely?',
      options: zh
        ? [
            { label: '立即减仓或退出', score: 1 },
            { label: '感到不安但继续持有', score: 2 },
            { label: '维持原计划', score: 3 },
            { label: '视为加仓机会', score: 4 },
          ]
        : [
            { label: 'Reduce or exit immediately', score: 1 },
            { label: 'Uneasy but hold', score: 2 },
            { label: 'Stay the course', score: 3 },
            { label: 'View as buying opportunity', score: 4 },
          ],
    },
    {
      id: 'experience',
      profileKey: 'experience',
      text: zh ? '您的证券投资经验？' : 'Your securities investing experience?',
      options: zh
        ? [
            { label: '几乎没有', score: 1 },
            { label: '1–3 年', score: 2 },
            { label: '3–10 年', score: 3 },
            { label: '10 年以上', score: 4 },
          ]
        : [
            { label: 'Little to none', score: 1 },
            { label: '1–3 years', score: 2 },
            { label: '3–10 years', score: 3 },
            { label: '10+ years', score: 4 },
          ],
    },
    {
      id: 'goal',
      profileKey: 'returnGoal',
      text: zh ? '您当前最主要的投资目标是？' : 'Your primary investment goal?',
      options: zh
        ? [
            { label: '本金安全 / 保值', score: 1 },
            { label: '稳健增值', score: 2 },
            { label: '长期成长', score: 3 },
            { label: '积极追求高收益', score: 4 },
          ]
        : [
            { label: 'Capital preservation', score: 1 },
            { label: 'Steady growth', score: 2 },
            { label: 'Long-term growth', score: 3 },
            { label: 'Aggressive return seeking', score: 4 },
          ],
    },
    {
      id: 'income',
      profileKey: 'capacity',
      text: zh ? '您的收入与现金流稳定性？' : 'Stability of your income and cash flow?',
      options: zh
        ? [
            { label: '不稳定，依赖投资收益', score: 1 },
            { label: '一般', score: 2 },
            { label: '较稳定', score: 3 },
            { label: '非常稳定', score: 4 },
          ]
        : [
            { label: 'Unstable, rely on investment income', score: 1 },
            { label: 'Moderate', score: 2 },
            { label: 'Relatively stable', score: 3 },
            { label: 'Very stable', score: 4 },
          ],
    },
    {
      id: 'allocation',
      profileKey: 'capacity',
      text: zh ? '您计划投入证券账户的资金占可投资资产比例？' : 'Planned allocation to securities as % of investable assets?',
      options: zh
        ? [
            { label: '低于 20%', score: 1 },
            { label: '20%–40%', score: 2 },
            { label: '40%–70%', score: 3 },
            { label: '70% 以上', score: 4 },
          ]
        : [
            { label: 'Under 20%', score: 1 },
            { label: '20%–40%', score: 2 },
            { label: '40%–70%', score: 3 },
            { label: 'Over 70%', score: 4 },
          ],
    },
  ]
}

function getOptionLabel(questions, answers, qId) {
  const q = questions.find((x) => x.id === qId)
  if (!q || answers[qId] == null) return '—'
  return q.options.find((o) => o.score === answers[qId])?.label || '—'
}

export const RISK_LEVEL_MAPPING = [
  { maxScore: 8, levelZh: '保守', levelEn: 'Conservative', tierKey: '12', strategies: ['gcta-defensive'] },
  { maxScore: 11, levelZh: '中低风险', levelEn: 'Moderate-Low', tierKey: '12', strategies: ['gcta-defensive', 'gcta-core'] },
  { maxScore: 15, levelZh: '平衡', levelEn: 'Balanced', tierKey: '34', strategies: ['gcta-core', 'cai-index'] },
  { maxScore: 19, levelZh: '中高风险', levelEn: 'Moderate-High', tierKey: '45', strategies: ['gcta-growth', 'enhanced-sp500', 'cai-index'] },
  { maxScore: 24, levelZh: '高风险', levelEn: 'High Risk', tierKey: 'high', strategies: ['flexible-alpha', 'enhanced-nasdaq', 'gcta-growth'] },
]

export const RISK_DISCLAIMER = {
  zh: '本评估结果仅供参考，不构成投资建议。',
  en: 'For reference only — not investment advice.',
}

export const RECOMMENDED_STRATEGY_RULES = RISK_LEVEL_MAPPING

function getRiskLevel(total) {
  return RISK_LEVEL_MAPPING.find((r) => total <= r.maxScore) || RISK_LEVEL_MAPPING[RISK_LEVEL_MAPPING.length - 1]
}

export function calculateResult(answers, locale) {
  const zh = locale === 'zh'
  const questions = getQuestions(locale)
  const total = Object.values(answers).reduce((sum, s) => sum + (s || 0), 0)
  const risk = getRiskLevel(total)

  return {
    score: total,
    maxScore: 24,
    riskLevelZh: risk.levelZh,
    riskLevelEn: risk.levelEn,
    tierKey: risk.tierKey,
    strategies: risk.strategies,
    accountsZh: total <= 11
      ? ['个人投资账户', 'IRA 退休账户']
      : total <= 15
        ? ['个人投资账户', 'IRA 退休账户', '联名账户']
        : ['个人投资账户', 'IRA 退休账户', '教育账户', '信托账户'],
    accountsEn: total <= 11
      ? ['Individual Account', 'IRA']
      : total <= 15
        ? ['Individual', 'IRA', 'Joint']
        : ['Individual', 'IRA', 'Education', 'Trust'],
    profile: {
      horizon: getOptionLabel(questions, answers, 'horizon'),
      returnGoal: getOptionLabel(questions, answers, 'goal'),
      volatility: getOptionLabel(questions, answers, 'drawdown'),
      capacity: zh
        ? `${getOptionLabel(questions, answers, 'income')}；证券资产占比 ${getOptionLabel(questions, answers, 'allocation')}`
        : `${getOptionLabel(questions, answers, 'income')}; securities weight ${getOptionLabel(questions, answers, 'allocation')}`,
    },
    matchGuide: RISK_MATCH_GUIDE,
  }
}
