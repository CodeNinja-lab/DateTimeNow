import type { HttpContext } from '@adonisjs/core/http'
import { DateTime } from 'luxon'

export default class TimeController {
  public async nowDate({ response }: HttpContext) {
    // Obtenir la date et l'heure actuelles en UTC 
    const nowUtc = DateTime.now().toUTC()

    return response.ok({
      message: 'Date et heure actuelles',
      // Format standard ISO 8601 (avec le 'Z' pour UTC)
      timestamp_utc: nowUtc.toISO(), 
      formatted_date: nowUtc.toFormat('dd/MM/yyyy HH:mm:ss ZZZ'),
      timezone: nowUtc.zoneName
    })
  }
}