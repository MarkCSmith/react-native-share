import { ShareOptions } from '../types';
import { checkAndroidPermissionsForUrls } from './android';
import { isAndroid } from './platform';

/** Check if the passed in options require platform permission. If an error isn't thrown, no permission is required */
export default async function checkPermissions({ url, urls, writePermissionNotNeeded }: Pick<ShareOptions, 'url' | 'urls' | 'writePermissionNotNeeded'>) {
  if (isAndroid()) {
    if (!writePermissionNotNeeded && (url || urls)) {
      const normalizedUrls = urls ?? (url ? [url] : []);
      await checkAndroidPermissionsForUrls(normalizedUrls);
    }
  }
}
