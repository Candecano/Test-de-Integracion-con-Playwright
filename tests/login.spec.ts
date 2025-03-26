import { test, expect, chromium } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config(); // Carga variables del .env

const BASE_URL = process.env.BASE_URL ?? "";
const DNIVALIDO = process.env.DNIVALIDO ?? "";
const PVALIDO = process.env.PVALIDO ?? "";
const DNIINVALIDO1 = process.env.DNIINVALIDO1 ?? "";
const DNIINVALIDO2= process.env.DNIINVALIDO2 ?? "";
const PINVALIDO = process.env.PINVALIDO ?? "";


test.describe('Pruebas Login Sistema de Alumnos', () => {
    
    test('Caso exitoso: ingreso con credenciales válidas ', async ({ page }) => {
  
        const browser = await chromium.launch({
            headless: false
          });
          const context = await browser.newContext();
         
        await page.goto(`${BASE_URL}`);
        await page.pause()
        await page.locator('[placeholder="Usuario"]').fill(DNIVALIDO); 
        await page.locator('[placeholder="Contraseña"]').fill(PVALIDO);
        await page.getByRole('button', { name: 'Submit' }).click();
        await context.close();
        await expect(page).toHaveURL(`${BASE_URL}Proteccion/Inicio.aspx`);
        await browser.close();

    });

    test('Caso fallido: ingreso con credenciales inválidas 1 ', async ({ page }) => {
        await page.goto(`${BASE_URL}`);
        await page.pause()
        await page.locator('[placeholder="Usuario"]').fill(DNIINVALIDO1); 
        await page.locator('[placeholder="Contraseña"]').fill(PINVALIDO);
        await page.getByRole('button', { name: 'Submit' }).click();
        await expect(page.locator('text="La combinación de usuario y clave no coincide"')).toBeVisible();
        await page.pause()
    });

    test('Caso fallido: ingreso con credenciales inválidas 2 ', async ({ page }) => {
        await page.goto(`${BASE_URL}`);
        await page.pause()
        await page.locator('[placeholder="Usuario"]').fill(DNIINVALIDO2); 
        await page.locator('[placeholder="Contraseña"]').fill(PINVALIDO);
        await page.getByRole('button', { name: 'Submit' }).click();
        await expect(page.locator('text="La combinación de usuario y clave no coincide o no tiene permisos"')).toBeVisible();
        await page.pause()
    });



   
});


