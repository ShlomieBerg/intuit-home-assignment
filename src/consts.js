let BASE_URL;
if (process.env.REACT_APP_ENV && process.env.REACT_APP_ENV === "development")
{
    // https://beeceptor.com/console/finite-state-machine
    BASE_URL = 'http://localhost:3001';
} else
{
    BASE_URL = 'https://finite-state-machine.free.beeceptor.com';
}


const DARK_MODE_MACHINE_URL = BASE_URL + '/dark-mode-machine';
const TAX_MACHINE_URL = BASE_URL + '/tax-refund-machine';

export { DARK_MODE_MACHINE_URL, TAX_MACHINE_URL };