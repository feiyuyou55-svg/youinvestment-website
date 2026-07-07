import { strategyLabel } from '../data/strategies'

export default function StrategyName({ id, locale = 'zh', className = '' }) {
  return <span className={className}>{strategyLabel(id, locale)}</span>
}
