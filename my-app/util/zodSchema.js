const zod = require('zod');

export const userSchema = zod.object({
    name: zod.string().min(2).max(255),
    age: zod.number().int().positive(),
    email: zod.string().email(),
    membership: zod.enum(['Basic', 'Premium', 'PremiumPlus'])
})

export const emailSchema = zod.string().email();