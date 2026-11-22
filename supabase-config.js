/* TimePlus - Supabase Configuration */
(function () {
  'use strict';

  const SUPABASE_URL =
    'https://bmipvkgirttoqlnzxgys.supabase.co';

  // این مقدار فعلاً آزمایشی است.
  // کلید عمومی را پس از آماده‌شدن تنظیمات امنیتی وارد می‌کنیم.
  const SUPABASE_PUBLISHABLE_KEY =
    'sb_publishable_p78LXedCgBv8pyjph7kGaA_T6rj5CDa';

  if (!window.supabase?.createClient) {
    console.error('Supabase SDK is not loaded.');
    return;
  }

  if (SUPABASE_PUBLISHABLE_KEY === 'YOUR_PUBLISHABLE_KEY') {
    console.warn('TimePlus: Supabase key is not configured yet.');
    return;
  }

  window.timePlusSupabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
  );
})();
