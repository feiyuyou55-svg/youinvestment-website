/**
 * CMS API — future integration stub
 * Supported backends: Supabase, Firebase, Sanity, Strapi, Directus, Airtable, custom API
 */

export const CMS_PROVIDERS = ['static', 'supabase', 'firebase', 'sanity', 'strapi', 'directus', 'airtable', 'api']

/** Current mode — switch when Admin CMS is connected */
export const CMS_MODE = 'static'

export async function fetchCMSData(module) {
  if (CMS_MODE === 'static') {
    const { getStaticSiteData } = await import('./index')
    const data = getStaticSiteData()
    return data[module] || null
  }
  // Future: return fetch(`/api/cms/${module}`).then(r => r.json())
  throw new Error(`CMS provider "${CMS_MODE}" not configured for module "${module}"`)
}

export async function saveCMSData(module, payload) {
  if (CMS_MODE === 'static') {
    console.warn(`[CMS stub] saveCMSData("${module}") — no-op in static mode`, payload)
    return { ok: false, message: 'Static mode — database not connected' }
  }
  throw new Error(`CMS provider "${CMS_MODE}" not configured`)
}

export async function deleteCMSItem(module, id) {
  return saveCMSData(module, { action: 'delete', id })
}
