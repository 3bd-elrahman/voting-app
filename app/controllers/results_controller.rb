class ResultsController < ApplicationController


  def index
@result=Result
end
  def new
    @result=Result.new
  end

  def create
    @result=Result.create(result_param)
    if @result.save
      redirect_to action: :index
    else
      redirect_to action: :new
    end
  end

  private
  def result_param
    params.require(:result).permit(:name,:country,:team,:goal_keeper,:defender,:midfielder,:striker)
  end

end
