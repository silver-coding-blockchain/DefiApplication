use anchor_lang::prelude::*;

declare_id!("6w1nyi94G8Q65gWinzVXEj38AwnCMqzsGFFpzB4Y6zNY");

#[program]
pub mod defi_app {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
