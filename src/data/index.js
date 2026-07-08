/**
 * Central data layer — CMS-ready entry point
 */

export { COMPANY, NAV_PATHS, INTENT_MAP } from './site'
export {
  STRATEGIES, STRATEGY_LIST, STRATEGY_ORDER, STRATEGY_PREVIEW_LIST, STRATEGY_PREVIEW_ORDER,
  strategyLabel, normalizeStrategy, getStrategyById, getPreviewStrategies, getFullStrategies,
  getMatchedStrategies, RISK_MATCH_GUIDE,
} from './strategies'
export { HOME_HERO, HOME_WHY_YIM, CLIENT_SEGMENTS, HOME_SECTIONS } from './home'
export {
  HOME_HERO as SITE_HOME_HERO, HOME_SECTIONS as SITE_HOME_SECTIONS,
  ACCOUNTS_PAGE, STRATEGIES_PAGE, RISK_PAGE, CONTACT_PAGE, FOOTER_CONTENT,
  SITE_DISCLAIMER, ABOUT_TEAM_SECTION,
} from './siteContent'
export { ACCOUNT_HELP, FEATURED_ACCOUNTS, OTHER_ACCOUNTS } from './accounts'
export { WEALTH_DIAGNOSIS } from './services'
export { FOUNDER_PROFILE, FOUNDER_BOOKS, FOUNDER_TIMELINE, CYCLE_EVOLUTION } from './founder'
export { ACTIVITIES } from './activities'
export { WHY_YIM, ECOSYSTEM_MODULES, ABOUT_PAGE } from './ecosystem'
export { CONTACT_FORM_INTENTS } from './contact'
export { TEAM_PAGE, TEAM_ROLES, TEAM_MEMBERS, getVisibleTeamMembers, getTeamMemberBySlug, getFounderTeamMember } from './team'
export { RESEARCH_CATEGORIES, RESEARCH_ITEMS, RESEARCH_PAGE } from './research'
export { INDICES, INDEX_ORDER, INDEX_PAGE, getVisibleIndices, getIndexBySlug } from './indices'
export { DOCUMENTS, DOCUMENT_TYPES, DOCUMENT_PAGE, getVisibleDocuments, getDocumentBySlug } from './documents'
export { ADMIN_META, ADMIN_MENU, ADMIN_MODULES, ADMIN_ACTIONS } from './admin'
export {
  ASSESSMENT_VERSION, getQuestions, calculateResult,
  RISK_LEVEL_MAPPING, RISK_DISCLAIMER, RECOMMENDED_STRATEGY_RULES,
} from './riskAssessment'

import * as siteData from './site'
import * as strategiesData from './strategies'
import * as homeData from './home'
import * as siteContentData from './siteContent'
import * as accountsData from './accounts'
import * as servicesData from './services'
import * as founderData from './founder'
import * as activitiesData from './activities'
import * as ecosystemData from './ecosystem'
import * as contactData from './contact'
import * as teamData from './team'
import * as researchData from './research'
import * as indicesData from './indices'
import * as documentsData from './documents'
import * as adminData from './admin'
import * as riskData from './riskAssessment'

export function getStaticSiteData() {
  return {
    site: siteData,
    strategies: strategiesData,
    home: homeData,
    siteContent: siteContentData,
    accounts: accountsData,
    services: servicesData,
    founder: founderData,
    activities: activitiesData,
    ecosystem: ecosystemData,
    contact: contactData,
    team: teamData,
    research: researchData,
    indices: indicesData,
    documents: documentsData,
    admin: adminData,
    riskAssessment: riskData,
  }
}

export async function loadSiteData(source = 'static') {
  if (source === 'static') return getStaticSiteData()
  throw new Error(`Data source "${source}" not configured. Use "static" for local dev.`)
}
