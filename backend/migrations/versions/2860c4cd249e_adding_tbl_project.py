"""Adding tbl_project

Revision ID: 2860c4cd249e
Revises: 9bda56f433ec
Create Date: 2024-01-31 18:07:03.447715

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2860c4cd249e'
down_revision = '9bda56f433ec'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('tbl_project',
    sa.Column('ccn_project', sa.Integer(), nullable=False),
    sa.Column('title_project', sa.String(length=100), nullable=False),
    sa.Column('description_project', sa.String(length=300), nullable=False),
    sa.Column('pdf_software_requirement', sa.LargeBinary(), nullable=True),
    sa.Column('image_entity_relationship', sa.LargeBinary(), nullable=True),
    sa.PrimaryKeyConstraint('ccn_project')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('tbl_project')
    # ### end Alembic commands ###
