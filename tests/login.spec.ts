import { test, expect, chromium } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config(); // Carga variables del .env

const BASE_URL = process.env.BASE_URL ?? "";
const DNIVALIDO = process.env.DNIVALIDO ?? "";
const PVALIDO = process.env.PVALIDO ?? "";
const DNIINVALIDO1 = process.env.DNIINVALIDO1 ?? "";
const DNIINVALIDO2= process.env.DNIINVALIDO2 ?? "";
const PASS_INVALIDO = process.env.PASS_INVALIDO ?? "";


test.describe('Pruebas de Login', () => {
    
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
await browser.close();
  

    });

   
});


