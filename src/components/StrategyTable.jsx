import { Link } from 'react-router-dom'
import { strategyLabel } from '../data/strategies'

export default function StrategyTable({
  strategies, locale, labels, compact = false,
  showPositioning = false, showAccounts = false, hideSharpe = false,
}) {
  const isZh = locale === 'zh'

  return (
    <div className="strategy-table-wrap">
      <table className={`strategy-table ${compact ? 'strategy-table--compact' : ''}`}>
        <thead>
          <tr>
            <th>{labels.strategyName}</th>
            <th>{labels.risk}</th>
            <th>{labels.benchmark}</th>
            <th>{labels.cumulativeReturn}</th>
            <th>{labels.maxDrawdown}</th>
            {!hideSharpe && <th>{labels.sharpe}</th>}
            <th>{labels.lastUpdated}</th>
            {showPositioning && <th>{labels.positioning}</th>}
            {showAccounts && <th>{labels.suitableAccounts}</th>}
          </tr>
        </thead>
        <tbody>
          {strategies.map((st) => (
            <tr key={st.id}>
              <td className="strategy-table__name">
                <strong>{strategyLabel(st.id, locale)}</strong>
              </td>
              <td>{st.riskDisplay}</td>
              <td>{st.benchmark}</td>
              <td className="up">{st.cumulativeReturn}</td>
              <td className="down">{st.maxDrawdown}</td>
              {!hideSharpe && <td>{st.sharpe}</td>}
              <td>{st.lastUpdated}</td>
              {showPositioning && (
                <td className="strategy-table__brief">
                  {isZh ? st.positioningZh : st.positioningEn}
                </td>
              )}
              {showAccounts && (
                <td className="strategy-table__accounts">
                  {(isZh ? st.suitableAccountsZh : st.suitableAccountsEn).join('、')}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
