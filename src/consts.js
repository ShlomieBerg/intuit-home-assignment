// https://beeceptor.com/console/finite-state-machine

const DARK_MODE_MACHINE_PREFIX = '/dark-mode-machine';
const TAX_MACHINE_PREFIX = '/tax-refund-machine';

const BASE_URL_DEV = 'http://localhost:3001';
const BASE_URL = 'https://finite-state-machine.free.beeceptor.com';

const DARK_MODE_MACHINE_URL = BASE_URL + DARK_MODE_MACHINE_PREFIX;
const DARK_MODE_MACHINE_URL_DEV = BASE_URL_DEV + DARK_MODE_MACHINE_PREFIX;
const TAX_MACHINE_URL = BASE_URL + TAX_MACHINE_PREFIX;
const TAX_MACHINE_URL_DEV = BASE_URL_DEV + TAX_MACHINE_PREFIX;

export { DARK_MODE_MACHINE_URL, DARK_MODE_MACHINE_URL_DEV, TAX_MACHINE_URL, TAX_MACHINE_URL_DEV };