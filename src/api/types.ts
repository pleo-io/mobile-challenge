// NOTICE: These types does not necessarily contain all properties returned by the SpaceX API.
// Find more information about API responses here: https://docs.spacexdata.com/?version=latest

export interface Launch {
    flight_number: number
    links: {
        flickr_images: string[]
        mission_patch_small: string | null
        youtube_id: string | null
    }
    mission_name: string
    mission_patch_small: string
    launch_success: boolean
    rocket: Rocket
    launch_site: LaunchSite
    launch_date_utc: string
    launch_date_local: string
}

export interface LaunchSite {
    site_id: string
    site_name_long: string
    site_name: string
}

export interface Rocket {
    rocket_name: string
    rocket_type: string
    first_stage: FirstStage
    second_stage: SecondStage
}

export interface FirstStage {
    cores: Core[]
}

export interface SecondStage {
    block: number
    payloads: Payload[]
}

export interface Payload {
    payload_type: string
}

export interface Core {
    land_success: boolean
    core_serial: string
}

export interface Pad {
    id: number
    name: string,
    status: 'active' | 'retired' | 'under construction'
    location: Location
    vehicles_launched: string[]
    attempted_launches: number
    successful_launches: number
    wikipedia: string
    details: string
    site_id: string
    site_name_long: string
}

interface Location {
    name: string
    region: string
    latitude: number
    longitude: number
}
