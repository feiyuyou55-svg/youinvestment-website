/**
 * Central data layer — CMS-ready entry point
 */

export { COMPANY, NAV_PATHS, INTENT_MAP } from './site'
export { STRATEGIES, STRATEGY_LIST, STRATEGY_ORDER, STRATEGY_PREVIEW_LIST, STRATEGY_PREVIEW_ORDER, strategyLabel, RISK_MATCH_GUIDE } from './strategies'
export { HOME_HERO, HOME_WHY_YIM, CLIENT_SEGMENTS, HOME_SECTIONS } from './home'
export { ACCOUNT_HELP, FEATURED_ACCOUNTS, OTHER_ACCOUNTS } from './accounts'
export { WEALTH_DIAGNOSIS } from './services'
export { FOUNDER_PROFILE, FOUNDER_BOOKS, FOUNDER_TIMELINE, CYCLE_EVOLUTION } from './founder'
export { ACTIVITIES } from './activities'
export { WHY_YIM, ECOSYSTEM_MODULES, ABOUT_PAGE } from './ecosystem'
export { CONTACT_FORM_INTENTS } from './contact'
export { TEAM_PAGE, TEAM_ROLES, TEAM_MEMBERS, getVisibleTeamMembers, getTeamMemberBySlug, getFounderTeamMember } from './team'
export { RESEARCH_CATEGORIES, RESEARCH_ITEMS, RESEARCH_PAGE } from './research'
export { getQuestions, calculateResult, ASSESSMENT_VERSION } from './riskAssessment'

import * as siteData from './site'
import * as strategiesData from './strategies'
import * as homeData from './home'
import * as accountsData from './accounts'
import * as servicesData from './services'
import * as founderData from './founder'
import * as activitiesData from './activities'
import * as ecosystemData from './ecosystem'
import * as contactData from './contact'
import * as teamData from './team'
import * as researchData from './research'
import * as riskData from './riskAssessment'

export function getStaticSiteData() {
  return {
    site: siteData,
    strategies: strategiesData,
    home: homeData,
    accounts: accountsData,
    services: servicesData,
    founder: founderData,
    activities: activitiesData,
    ecosystem: ecosystemData,
    contact: contactData,
    team: teamData,
    research: researchData,
    riskAssessment: riskData,
  }
}

export async function loadSiteData(source = 'static') {
  if (source === 'static') return getStaticSiteData()
  throw new Error(`Data source "${source}" not configured. Use "static" for local dev.`)
}
