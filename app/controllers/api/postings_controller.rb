class Api::PostingsController < ApplicationController

  def index
    postings = Posting.all.order(created_at: :desc)
    render json: { postings: postings }
  end


  def create
    new_posting = Posting.create posting_params
    render json: { new: new_posting }
  end


  def show
    render json: { posting: Posting.find(params[:id]) }
  end


  def update
    curr_posting = Posting.find(params[:id])
    curr_posting.update(posting_params)
    render json: {posting: curr_posting }
  end


  def destroy
    curr_posting = Posting.find(params[:id])
    curr_posting.destroy
    render json: { success: "Successfully deleted!" }
  end


  private
  
  def posting_params
    params.require(:posting).permit(:name, :email, :pet_type, :street_address, :comments, :city, :state, :zipcode, :start_date, :end_date, :is_stay_post )
  end


end