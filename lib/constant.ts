
/**
 * Images Logo
 * 
 * mengambil image yang ada pada folder `public` dengan batas 10 gambar pertama
 */
export const imagesLogo = [...new Array(10)].map((image, index) => ({
    href: `/${index + 1}.png`,
}))