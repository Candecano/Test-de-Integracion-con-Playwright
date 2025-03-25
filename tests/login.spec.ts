import { test, expect } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config(); // Carga variables del .env

const BASE_URL = process.env.BASE_URL ?? "";
const DNI_VALIDO = process.env.DNI_VALIDO ?? "";
const PASS_VALIDO = process.env.PASS_VALIDO ?? "";
const DNI_INVALIDO = process.env.DNI_INVALIDO ?? "";
const PASS_INVALIDO = process.env.PASS_INVALIDO ?? "";

test.describe('Pruebas de Login', () => {
    
    test('Caso exitoso: ingreso con credenciales válidas', async ({ page }) => {
        await page.goto(`${BASE_URL}`);
        await page.pause()
        await page.getByRole('textbox', { name: 'Usuario' }).fill(DNI_VALIDO);
        await page.getByRole('textbox', { name: 'Clave inicial' }).fill(PASS_VALIDO);
        await page.getByRole('button', { name: 'Submit' }).click();
        

    });

   
});
