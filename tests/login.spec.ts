import { test, expect } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config(); // Carga variables del .env

const BASE_URL = process.env.BASE_URL ?? "";
const DNIVALIDO1 = process.env.DNIVALIDO1 ?? "";
const PASS_VALIDO = process.env.PASS_VALIDO ?? "";
const DNI_INVALIDO = process.env.DNI_INVALIDO ?? "";
const PASS_INVALIDO = process.env.PASS_INVALIDO ?? "";
const DNIVALIDO2= process.env.DNIVALIDO2 ?? "";
const PASS_VALIDO2 = process.env.PASS_VALIDO2 ?? "";

test.describe('Pruebas de Login', () => {
    
    test('Caso exitoso: ingreso con credenciales válidas 1', async ({ page }) => {
        await page.goto(`${BASE_URL}`);
        await page.pause()
        await page.getByRole('textbox', { name: 'Usuario' }).fill(DNIVALIDO1);
        await page.getByRole('textbox', { name: 'Clave inicial' }).fill(PASS_VALIDO);
        await page.getByRole('button', { name: 'Submit' }).click();
        

    });

    test('Caso exitoso: ingreso con credenciales válidas 2', async ({ page }) => {
        await page.goto(`${BASE_URL}`);
        await page.pause()
        await page.getByRole('textbox', { name: 'Usuario' }).fill(DNIVALIDO2);
        await page.getByRole('textbox', { name: 'Clave inicial' }).fill(PASS_VALIDO2);
        await page.getByRole('button', { name: 'Submit' }).click();
        

    });
});
