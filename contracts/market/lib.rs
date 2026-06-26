use anchor_lang::prelude::*;

declare_id!("ISORYN111111111111111111111111111111111");

#[program]
pub mod market {
    use super::*;

    pub fn create_market(
        _ctx: Context<CreateMarket>,
        title: String,
    ) -> Result<()> {
        msg!("Market {}", title);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct CreateMarket<'info> {
    #[account(mut)]
    pub signer: Signer<'info>,
}
